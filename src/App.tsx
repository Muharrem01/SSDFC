import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
  type DragStartEvent,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';

import Sidebar from './components/Sidebar';
import Pitch from './components/Pitch';
import PlayerModal from './components/PlayerModal';
import PlayerCard from './components/PlayerCard';
import { players as initialPlayers, type Player } from './data/players';
import { formations } from './data/formations';
import './App.css';

function App() {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [currentFormation, setCurrentFormation] = useState<string>('2-2-2');

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
  };

  const handleCloseModal = () => {
    setSelectedPlayer(null);
  };

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as number);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setPlayers((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);

        const newItems = [...items];
        const activeItem = { ...newItems[oldIndex] };
        const overItem = { ...newItems[newIndex] };

        // Swap coordinates and isStarting status
        const tempCoords = activeItem.coordinates;
        const tempIsStarting = activeItem.isStarting;

        activeItem.coordinates = overItem.coordinates;
        activeItem.isStarting = overItem.isStarting;

        overItem.coordinates = tempCoords;
        overItem.isStarting = tempIsStarting;

        newItems[oldIndex] = overItem;
        newItems[newIndex] = activeItem;

        return newItems;
      });
    }

    setActiveId(null);
  };

  const toggleFormation = () => {
    const formationKeys = Object.keys(formations);
    const currentIndex = formationKeys.indexOf(currentFormation);
    const nextIndex = (currentIndex + 1) % formationKeys.length;
    const nextFormationKey = formationKeys[nextIndex];
    const nextFormation = formations[nextFormationKey];

    setCurrentFormation(nextFormationKey);

    // Update coordinates for starting players
    setPlayers(prevPlayers => {
      const startingPlayers = prevPlayers.filter(p => p.isStarting);
      const subs = prevPlayers.filter(p => !p.isStarting);
      
      // We assume starting players are mapped to formation positions in order
      const updatedStarting = startingPlayers.map((p, index) => ({
        ...p,
        coordinates: nextFormation.positions[index] || p.coordinates
      }));

      return [...updatedStarting, ...subs];
    });
  };

  const activePlayer = activeId ? players.find(p => p.id === activeId) : null;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="app-layout">
        <Sidebar players={players} onPlayerClick={handlePlayerClick} />
        <main className="main-content">
          <header className="app-header">
            <div className="logo-container">
              <img src="./logo.jpg" alt="SSD Logo" className="app-logo" />
              <h1>SSD</h1>
            </div>
            <div className="formation-badge" onClick={toggleFormation}>
              {currentFormation}
            </div>
          </header>
          <Pitch players={players} onPlayerClick={handlePlayerClick} />
        </main>

        {selectedPlayer && (
          <PlayerModal 
            player={selectedPlayer} 
            onClose={handleCloseModal} 
          />
        )}

        <DragOverlay dropAnimation={{
          sideEffects: defaultDropAnimationSideEffects({
            styles: {
              active: {
                opacity: '0.5',
              },
            },
          }),
        }}>
          {activePlayer ? (
            <PlayerCard player={activePlayer} onPitch={activePlayer.isStarting} />
          ) : null}
        </DragOverlay>
      </div>
    </DndContext>
  );
}

export default App;

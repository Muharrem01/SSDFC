import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Pitch from './components/Pitch';
import PlayerModal from './components/PlayerModal';
import type { Player } from './data/players';
import './App.css';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
  };

  const handleCloseModal = () => {
    setSelectedPlayer(null);
  };

  return (
    <div className="app-layout">
      <Sidebar onPlayerClick={handlePlayerClick} />
      <main className="main-content">
        <header className="app-header">
          <div className="logo-container">
            <img src="./logo.jpg" alt="SSD Logo" className="app-logo" />
            <h1>SSD</h1>
          </div>
          <div className="formation-badge">1-2-2-2</div>
        </header>
        <Pitch onPlayerClick={handlePlayerClick} />
      </main>

      {selectedPlayer && (
        <PlayerModal 
          player={selectedPlayer} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}

export default App;

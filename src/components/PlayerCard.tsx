import { useDraggable, useDroppable } from '@dnd-kit/core';
import type { Player } from '../data/players';
import './PlayerCard.css';

interface PlayerCardProps {
  player: Player;
  onPitch?: boolean;
  onClick?: (player: Player) => void;
  isOverlay?: boolean;
}

const PlayerCard = ({ player, onPitch = false, onClick, isOverlay = false }: PlayerCardProps) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: player.id,
  });

  const { setNodeRef: setDropRef } = useDroppable({
    id: player.id,
  });

  const style = (transform && !isDragging) ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  const positionStyle = onPitch ? { 
    left: `${player.coordinates.x}%`, 
    top: `${player.coordinates.y}%`,
    opacity: isDragging ? 0.4 : 1,
  } : {
    opacity: isDragging ? 0.4 : 1,
  };

  return (
    <div 
      ref={(node) => {
        setNodeRef(node);
        setDropRef(node);
      }}
      className={`player-card ${onPitch ? 'on-pitch' : 'in-sidebar'} ${isDragging ? 'dragging' : ''} ${isOverlay ? 'overlay' : ''}`}
      style={{ ...positionStyle, ...style }}
      {...attributes}
      {...listeners}
      onClick={() => {
        // Prevent click when dragging ends
        if (transform && (Math.abs(transform.x) > 5 || Math.abs(transform.y) > 5)) {
          return;
        }
        onClick?.(player);
      }}
    >
      <div className="player-image-container">
        {player.photo ? (
          <img src={player.photo} alt={player.name} className="player-image" />
        ) : (
          <div className="player-placeholder">
            {player.name.charAt(0)}
          </div>
        )}
        <div className="player-number">{player.number}</div>
      </div>
      <div className="player-info">
        <div className="player-name">{player.nickname || player.name}</div>
        <div className="player-pos">{player.position}</div>
      </div>
    </div>
  );
};

export default PlayerCard;

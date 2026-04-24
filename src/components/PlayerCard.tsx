import type { Player } from '../data/players';
import './PlayerCard.css';

interface PlayerCardProps {
  player: Player;
  onPitch?: boolean;
  onClick?: (player: Player) => void;
}

const PlayerCard = ({ player, onPitch = false, onClick }: PlayerCardProps) => {
  return (
    <div 
      className={`player-card ${onPitch ? 'on-pitch' : 'in-sidebar'}`}
      style={onPitch ? { left: `${player.coordinates.x}%`, top: `${player.coordinates.y}%` } : {}}
      onClick={() => onClick?.(player)}
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
        <div className="player-name">{player.name}</div>
        <div className="player-pos">{player.position}</div>
      </div>
    </div>
  );
};

export default PlayerCard;

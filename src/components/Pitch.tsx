import { players } from '../data/players';
import type { Player } from '../data/players';
import PlayerCard from './PlayerCard';
import './Pitch.css';

interface PitchProps {
  onPlayerClick: (player: Player) => void;
}

const Pitch = ({ onPlayerClick }: PitchProps) => {
  const startingPlayers = players.filter(p => p.isStarting);

  return (
    <div className="pitch-container">
      <div className="pitch">
        {/* Pitch Markings */}
        <div className="pitch-outline"></div>
        <div className="midline"></div>
        <div className="center-circle"></div>
        <div className="penalty-area top"></div>
        <div className="penalty-area bottom"></div>
        <div className="goal top"></div>
        <div className="goal bottom"></div>
        
        {/* Players */}
        {startingPlayers.map(player => (
          <PlayerCard key={player.id} player={player} onPitch={true} onClick={onPlayerClick} />
        ))}
      </div>
    </div>
  );
};

export default Pitch;

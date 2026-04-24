import { players } from '../data/players';
import PlayerCard from './PlayerCard';
import './Pitch.css';

const Pitch = () => {
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
          <PlayerCard key={player.id} player={player} onPitch={true} />
        ))}
      </div>
    </div>
  );
};

export default Pitch;

import type { Player } from '../data/players';
import PlayerCard from './PlayerCard';
import './Sidebar.css';
import { Users } from 'lucide-react';

interface SidebarProps {
  players: Player[];
  onPlayerClick: (player: Player) => void;
}

const Sidebar = ({ players, onPlayerClick }: SidebarProps) => {
  const substitutes = players.filter(p => !p.isStarting);

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Users size={20} color="var(--primary-color)" />
        <h2>YEDEKLER</h2>
      </div>
      <div className="substitutes-list">
        {substitutes.map(player => (
          <PlayerCard key={player.id} player={player} onClick={onPlayerClick} />
        ))}
      </div>
      <div className="team-info">
        <h3>SSD FC</h3>
        <p>Halısaha Takımı</p>
      </div>
    </aside>
  );
};

export default Sidebar;

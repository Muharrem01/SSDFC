import type { Player } from '../data/players';
import './PlayerModal.css';
import { X, MapPin, Calendar } from 'lucide-react';

interface PlayerModalProps {
  player: Player;
  onClose: () => void;
}

const PlayerModal = ({ player, onClose }: PlayerModalProps) => {
  const statsMapping = [
    { label: 'HIZ', value: player.stats.speed },
    { label: 'ŞUT', value: player.stats.shooting },
    { label: 'PAS', value: player.stats.passing },
    { label: 'TOP K.', value: player.stats.dribbling },
    { label: 'FİZİK', value: player.stats.physical },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-body">
          <div className="modal-left">
            <div className="modal-image-container">
              {player.photo ? (
                <img src={player.photo} alt={player.name} />
              ) : (
                <div className="modal-placeholder">{player.name.charAt(0)}</div>
              )}
              <div className="modal-number">{player.number}</div>
            </div>
            <h2 className="modal-name">{player.name}</h2>
            <p className="modal-pos">{player.position}</p>
            
            <div className="modal-info-grid">
              <div className="info-item">
                <Calendar size={16} />
                <span>{player.age} Yaş</span>
              </div>
              <div className="info-item">
                <MapPin size={16} />
                <span>{player.from}</span>
              </div>
            </div>
          </div>

          <div className="modal-right">
            <h3>TEKNİK ÖZELLİKLER</h3>
            <div className="stats-container">
              {statsMapping.map(stat => (
                <div key={stat.label} className="stat-row">
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-bar-bg">
                    <div 
                      className="stat-bar-fill" 
                      style={{ width: `${stat.value}%` }}
                    ></div>
                  </div>
                  <div className="stat-value">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerModal;

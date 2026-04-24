export interface Player {
  id: number;
  name: string;
  position: string;
  role: 'GK' | 'DF' | 'MF' | 'FW' | 'SUB';
  photo?: string;
  number: number;
  isStarting: boolean;
  coordinates: { x: number; y: number }; // Percentage for positioning on pitch
}

export const players: Player[] = [
  // Starting Lineup (1-2-2-2)
  { id: 1, name: "Kaleci", position: "Kaleci", role: 'GK', number: 1, isStarting: true, coordinates: { x: 50, y: 90 } },
  
  { id: 2, name: "Defans 1", position: "Sol Bek", role: 'DF', number: 3, isStarting: true, coordinates: { x: 30, y: 70 } },
  { id: 3, name: "Defans 2", position: "Sağ Bek", role: 'DF', number: 4, isStarting: true, coordinates: { x: 70, y: 70 } },
  
  { id: 4, name: "Orta Saha 1", position: "Sol Orta Saha", role: 'MF', number: 8, isStarting: true, coordinates: { x: 30, y: 45 } },
  { id: 5, name: "Orta Saha 2", position: "Sağ Orta Saha", role: 'MF', number: 10, isStarting: true, coordinates: { x: 70, y: 45 } },
  
  { id: 6, name: "Forvet 1", position: "Sol Forvet", role: 'FW', number: 7, isStarting: true, coordinates: { x: 35, y: 20 } },
  { id: 7, name: "Forvet 2", position: "Sağ Forvet", role: 'FW', number: 9, isStarting: true, coordinates: { x: 65, y: 20 } },

  // Substitutes
  { id: 8, name: "Yedek 1", position: "Yedek", role: 'SUB', number: 12, isStarting: false, coordinates: { x: 0, y: 0 } },
  { id: 9, name: "Yedek 2", position: "Yedek", role: 'SUB', number: 13, isStarting: false, coordinates: { x: 0, y: 0 } },
];

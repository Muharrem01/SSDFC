export interface PlayerStats {
  speed: number;
  shooting: number;
  passing: number;
  dribbling: number;
  physical: number;
}

export interface Player {
  id: number;
  name: string;
  nickname?: string;
  position: string;
  role: 'GK' | 'DF' | 'MF' | 'FW' | 'SUB';
  photo?: string;
  number: number;
  isStarting: boolean;
  coordinates: { x: number; y: number };
  age: number;
  from: string;
  stats: PlayerStats;
}

export const players: Player[] = [
  // Starting Lineup (1-2-2-2)
  { 
    id: 1, name: "Süleyman Emir Seçkin", nickname: "Sülo", position: "Kaleci", role: 'GK', photo: "./sülo.png", number: 1, isStarting: true, coordinates: { x: 50, y: 90 },
    age: 19, from: "Denizli", stats: { speed: 75, shooting: 50, passing: 68, dribbling: 64, physical: 80 }
  },
  { 
    id: 2, name: "Arda Çetin", nickname: "Arda", position: "Sol Bek", role: 'DF', photo: "./arda.png", number: 3, isStarting: true, coordinates: { x: 30, y: 70 },
    age: 20, from: "Denizli", stats: { speed: 58, shooting: 80, passing: 80, dribbling: 83, physical: 73 }
  },
  { 
    id: 3, name: "Efe Ünsal", nickname: "Efe", position: "Sağ Bek", role: 'DF', photo: "./efe.png", number: 4, isStarting: true, coordinates: { x: 70, y: 70 },
    age: 19, from: "Denizli", stats: { speed: 80, shooting: 82, passing: 84, dribbling: 78, physical: 78 }
  },
  { 
    id: 4, name: "Muharrem Kural", nickname: "Kural", position: "Sol Orta Saha", role: 'MF', number: 8, isStarting: true, coordinates: { x: 30, y: 45 },
    photo: "./kural.png", age: 19, from: "Burdur", stats: { speed: 82, shooting: 88, passing: 96, dribbling: 90, physical: 85 }
  },
  { 
    id: 5, name: "Ertuğrul Enes Vural", nickname: "Eto", position: "Sağ Orta Saha", role: 'MF', photo: "./eto.png", number: 10, isStarting: true, coordinates: { x: 70, y: 45 },
    age: 20, from: "Denizli", stats: { speed: 75, shooting: 84, passing: 80, dribbling: 84, physical: 82 }
  },
  { 
    id: 6, name: "Kürşat Emre Külköylüoğlu", nickname: "Küşo", position: "Sol Forvet", role: 'FW', photo: "./Küşo.png", number: 7, isStarting: true, coordinates: { x: 35, y: 20 },
    age: 20, from: "Denizli", stats: { speed: 60, shooting: 80, passing: 74, dribbling: 80, physical: 75 }
  },
  { 
    id: 7, name: "Mehmet Özkan", nickname: "Memo", position: "Sağ Forvet", role: 'FW', photo: "./memo.png", number: 9, isStarting: true, coordinates: { x: 65, y: 20 },
    age: 19, from: "Denizli", stats: { speed: 84, shooting: 90, passing: 95, dribbling: 83, physical: 70 }
  },

  // Substitutes
  { 
    id: 8, name: "Yedek 1", position: "Yedek", role: 'SUB', number: 12, isStarting: false, coordinates: { x: 0, y: 0 },
    age: 21, from: "Samsun", stats: { speed: 84, shooting: 70, passing: 75, dribbling: 76, physical: 74 }
  },
  { 
    id: 9, name: "Yedek 2", position: "Yedek", role: 'SUB', number: 13, isStarting: false, coordinates: { x: 0, y: 0 },
    age: 24, from: "Eskişehir", stats: { speed: 75, shooting: 65, passing: 80, dribbling: 72, physical: 80 }
  },
];

export interface Formation {
  name: string;
  label: string;
  positions: { x: number; y: number }[];
}

export const formations: Record<string, Formation> = {
  '2-2-2': {
    name: '2-2-2',
    label: '2-2-2',
    positions: [
      { x: 50, y: 90 }, // GK
      { x: 30, y: 70 }, // DF 1
      { x: 70, y: 70 }, // DF 2
      { x: 30, y: 45 }, // MF 1
      { x: 70, y: 45 }, // MF 2
      { x: 35, y: 20 }, // FW 1
      { x: 65, y: 20 }, // FW 2
    ]
  },
  '1-3-2': {
    name: '1-3-2',
    label: '1-3-2',
    positions: [
      { x: 50, y: 90 }, // GK
      { x: 50, y: 70 }, // DF 1
      { x: 20, y: 45 }, // MF 1
      { x: 50, y: 45 }, // MF 2
      { x: 80, y: 45 }, // MF 3
      { x: 35, y: 20 }, // FW 1
      { x: 65, y: 20 }, // FW 2
    ]
  }
};

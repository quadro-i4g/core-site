export type Grade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'N/A';

const colorize = (grade: Grade) => {
  if (grade === 'A') return '#32e1a0';
  if (grade === 'B') return '#eeed52';
  if (grade === 'C') return '#efbf39';
  if (grade === 'D' || grade === 'E') return '#e59148';
  if (grade === 'F') return '#ed4d4d';

  return '#000000';
};

export default colorize;

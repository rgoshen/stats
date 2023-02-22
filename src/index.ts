import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', 'utf-8')
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

console.log(matches);

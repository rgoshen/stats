import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', 'utf-8')
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

// enum - enumeration
enum matchResult {
  homeWin = 'H',
  awayWin = 'A',
  draw = 'D',
}

let manUnitedWins = 0;

for (const match of matches) {
  if (match[1] === 'Man United' && match[5] === matchResult.homeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === matchResult.awayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games.`);

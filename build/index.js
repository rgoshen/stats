"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResult_1 = require("./MatchResult");
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of 'MatchReader' and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let manUnitedWins = 0;
for (const match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.awayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResult_1 = require("./MatchResult");
const MatchReader_1 = require("./MatchReader");
const reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
let manUnitedWins = 0;
for (const match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.awayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games.`);

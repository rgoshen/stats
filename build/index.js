"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default
    .readFileSync('football.csv', 'utf-8')
    .split('\n')
    .map((row) => {
    return row.split(',');
});
// enum - enumeration
var matchResult;
(function (matchResult) {
    matchResult["homeWin"] = "H";
    matchResult["awayWin"] = "A";
    matchResult["draw"] = "D";
})(matchResult || (matchResult = {}));
let manUnitedWins = 0;
for (const match of matches) {
    if (match[1] === 'Man United' && match[5] === matchResult.homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === matchResult.awayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games.`);

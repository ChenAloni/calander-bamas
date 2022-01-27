"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const readline = require("readline");
function read() {
    return __awaiter(this, void 0, void 0, function* () {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        const sum = (...numbers) => numbers.reduce((s, i) => s += i, 0);
        const readNumbers = () => {
            return new Promise((r) => {
                rl.question("Please enter you numbers: ", (answer) => {
                    const numbers = answer.split(" ").map((x) => +x);
                    numbers.forEach((element) => {
                        if (isNaN(element)) {
                            throw `invalid input, enter only numbers.`;
                        }
                    });
                    r(sum(...numbers));
                    rl.close();
                });
            });
        };
        readNumbers().then((sum) => {
            console.log(`Sum: ${sum}`);
            return sum;
        });
    });
}
function main() {
    try {
        read();
    }
    catch (err) {
        console.log(`new Error exepted: ${err}`);
    }
}
main();

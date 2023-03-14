import { WordChecker } from "./WordChecker.js";

import * as readline from 'readline';
import { stdin as input, stdout as output } from 'node:process';

import 'babel-polyfill';


class Wordle {

    constructor() {
        this.dictionary = ["anvil", "brick", "crisp", "dance"];
    }

    async playGame() {

        const rl = readline.createInterface({ input, output });

        const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

        let exiting = false;

        try {
            while (!exiting) {

                let answer = await prompt('(P)lay) or e(X)it? ');
                answer = answer.toUpperCase();
                if (answer === "X") {
                    console.log(`Exit requested.`);
                    exiting = true;
                } else if (answer === "P") {
                    console.log(`Not ready to play`);
                } else {
                    console.log(`I don't know how to "${answer}"`);
                }

            }
        } catch (e) {
            console.log(`Unexpected exception ${e}`);
        }

        console.log(`Thank you for visiting, goodbye.`);

        rl.close();

    }
}


let wordle = new Wordle();
wordle.playGame();

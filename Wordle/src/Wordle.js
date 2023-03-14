import { WordChecker } from "./WordChecker.js";

import * as readline from 'readline';
import { stdin as input, stdout as output } from 'node:process';

import 'babel-polyfill';


class Wordle {

    constructor() {
        this.dictionary = ["anvil", "brick", "crisp", "dance"];

        this.rl = readline.createInterface({ input, output });

        this.prompt = (query) => new Promise((resolve) => this.rl.question(query, resolve));
    }

    async runWordle() {

        let exiting = false;

        try {
            while (!exiting) {

                let answer = await this.prompt('(P)lay) or e(X)it? ');
                answer = answer.toUpperCase();
                if (answer === "X") {
                    console.log(`Exit requested.`);
                    exiting = true;
                } else if (answer === "P") {
                    await this.playGame();
                } else {
                    console.log(`I don't know how to "${answer}"`);
                }

            }
        } catch (e) {
            console.log(`Unexpected exception ${e}`);
        }

        console.log(`Thank you for visiting, goodbye.`);

        this.rl.close();

    }

    async playGame(){
        let target = this.dictionary[0];
        let checker = new WordChecker(target);
        let done = false;
        let attempts = 0;
        while ( (! done) && attempts <= 6 ){
            attempts++;
            let guess =  await this.prompt(`${attempts}). Enter guess or :q to stop? `);
            if ( guess === ":q"){
                done = true;
            } else {
                let result = checker.check(guess);
                if ( result.solved ){
                    console.log(`solved :${result.guess}: in ${attempts}`);
                    done = true; 
                }else {
                    console.log(`match:${[...result.indicators].join("")}:`)
                }
            }
        }
        
    }
}



let wordle = new Wordle();
wordle.runWordle();

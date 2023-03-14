import { WordChecker } from "./WordChecker.js";

import * as readline from 'readline';
import { stdin as input, stdout as output } from 'node:process';
import { readFileSync } from 'fs';

import 'babel-polyfill';


class Wordle {

    constructor() {
        let filePath = "Wonder.txt";
        const data = readFileSync(filePath, 'utf-8');
        const regex = /\b\w{5}\b/g;
        this.dictionary = [...data.matchAll(regex)].map(
            (entry) => entry[0]
        );

        console.log(`Dictionary: ${this.dictionary}`);

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
     
        let target = this.dictionary[Math.floor(Math.random()*this.dictionary.length)];
        let checker = new WordChecker(target);
        let done = false;
        let attempts = 0;
        while ( (! done) && attempts < 6 ){
            attempts++;
            let guess =  await this.prompt(`${attempts}). Enter guess or :q to stop? `);
            if ( guess === ":q"){
                done = true;
                console.log(`The answer was :${target}:`);
                return;
            } else {
                let result = checker.check(guess);
                if ( result.solved ){
                    console.log(`solved :${result.guess}: in ${attempts}`);
                    done = true; 
                    return;
                }else {
                    console.log(`match:${[...result.indicators].join("")}:`)
                }
            }
        }
        if ( attempts >= 6 ){
            console.log(`Unlucky, the answer was :${target}:`);
        }
        
    }
}



let wordle = new Wordle();
wordle.runWordle();

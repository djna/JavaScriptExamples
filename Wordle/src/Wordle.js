import { WordChecker } from "./WordChecker.js";

import * as readline from 'readline';
import { stdin as input, stdout as output } from 'node:process';
import { readFileSync } from 'fs';

import 'babel-polyfill';


class Wordle {

    constructor() {
        let filePath = "Wonder.txt";
        const data = readFileSync(filePath, 'utf-8');
        const fiveLetterWordRegex = /(?!.{0,4}_)\b\w{5}\b/g;
        const fiveLetterWords = [...data.matchAll(fiveLetterWordRegex)].map(   
            (entry) => entry[0].toLowerCase() // entry is an array, first element the matched word
        ).filter( 
            ( word) => [...new Set(word)].length == 5
        ).sort(Intl.Collator().compare);

        this.dictionary = [...new Set(fiveLetterWords)];
        this.dictionaryStr = [...new Set(fiveLetterWords)].join(" ");

        console.log(`Dictionary: ${this.dictionaryStr}`);

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
                    if ( attempts == 5){
                        this.displayHint(result);
                    }
                }
            }
        }
        if ( attempts >= 6 ){
            console.log(`Unlucky, the answer was :${target}:`);
        } 
    }
    displayHint(result) {
        let hintRegexStr = this.regexFromIndicators(result.indicators);
        console.log(`Hint Regex: ${hintRegexStr}`);
        let hintRegex = new RegExp(hintRegexStr, "gmi");
        let hints = [...this.dictionaryStr.matchAll(hintRegex)].map(
            (hint) => hint[0]
        ).sort(Intl.Collator().compare);

        console.log(`Hints ${hints}`);
    }

    regexFromIndicators(indicators){

        return indicators.map(
            (oneIndicator, index) => {
                  if ( oneIndicator === " ") {
                      return "";
                  } else if ( /[a-z]/.test(oneIndicator) ) {
                    return `(?=.{0,4}${oneIndicator})`; 
                  } else if ( index == 0) {
                    return `(?=${oneIndicator})`; 
                  } else {
                    return `(?=.{${index}}${oneIndicator})`; 
                  }
            }
        ).join("")+"\\b\\w{5}\\b";
    }
    
}




let wordle = new Wordle();
wordle.runWordle();

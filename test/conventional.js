

import * as convent from '../conventional.js'
import { expect } from 'chai';

describe('camelize', function() {

    it('should return a camelCase equivalent of a human readable text', function () {
        let humanText = "Human readable text";

        let camelCaseText = convent.camelize(humanText);

        expect(camelCaseText).to.equal("HumanReadableText");
    });

    it('should manage embedded capitals', function () {
        let humanText = "Human readable TEXT";

        let camelCaseText = convent.camelize(humanText);

        expect(camelCaseText).to.equal("HumanReadableText");
    });

    it('should ignore leading spaces', function () {
        let humanText = "   Human readable TEXT";

        let camelCaseText = convent.camelize(humanText);

        expect(camelCaseText).to.equal("HumanReadableText");
    });

    it('should remove punctuation before camelize]ing ', function () {
        let humanText = "Human readable-text_with+punctuation";

        let camelCaseText = convent.camelize(humanText);

        expect(camelCaseText).to.equal("HumanReadableTextWithPunctuation");
    });

    it('should treat adjacent spaces and punctuation as a single space ', function () {
        let humanText = "Human   readable---text__with+''punctuation";

        let camelCaseText = convent.camelize(humanText);

        expect(camelCaseText).to.equal("HumanReadableTextWithPunctuation");
    });

    it('should remove single character words ', function () {
        let humanText = "Human's text a ";

        let camelCaseText = convent.camelize(humanText);

        expect(camelCaseText).to.equal("HumanText");
    });
});
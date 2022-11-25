

import * as convent from '../conventional.js'
import { expect } from 'chai';

describe('camelize', function() {

    it('should return a camelCase equivalent of a human readable text', function () {
        let humanText = "Human readable text";

        let camelCaseText = convent.camelize(humanText);

        expect(camelCaseText).to.equal("HumanReadableText");
    });
});
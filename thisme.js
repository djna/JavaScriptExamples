'use strict';

const foo = { 
    value: 42,
    setArrow: function (){
        this.arrowMethod = () => this.value;
    }
};

foo.traditionalMethod = function () { return this.value; };

foo.setArrow();

console.log(foo.traditionalMethod()); // 42
console.log(foo.arrowMethod()); // undefined
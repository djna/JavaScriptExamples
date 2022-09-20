

let initialArray = [3, 15, 75];

let [x, y, z ] = initialArray;

console.log("x = ", x);
console.log("y = ", y);
console.log("z = ", z);

let secondArray = [ 100, ...initialArray, 20];

console.log('Second array', secondArray);

function doWork( oneParam = 99, ...otherParams){
     console.log("oneParam = ", oneParam);
     console.log("otherParams = ", otherParams);

     let success = true; // false if failed to calculate
     return [success, {result: 854}];
}

console.log("call with 3 params");
doWork(70, 80, 90);

console.log("call with 2 params");
doWork(100, 120);

console.log("call with 1 param");
doWork(400);

console.log("call with no params");
doWork();

console.log("spread");
doWork(...initialArray);

console.log("array return");
const [success, value] = doWork();

console.log("success = ", success);

if ( success) {
    console.log("value = ", value);
}
   



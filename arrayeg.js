

let a;
show(a);

a = ["abc"];
show(a);

function show(array) {
    if ( array ){
        console.log(array);
    } else {
        console.log("nothing");
    }
}

let values = [ "xxx", "yyy", "zzz", undefined];
values[5] = "extra";
console.log("\nof");
for( let entry of values){
    console.log(entry);
}


console.log("\nof entries ");
for( let entry of values.entries() ){
    console.log(entry);
}

console.log("\nin");
for (let index in values){
    console.log(index, "=", values[index]);
}


console.log("\nmapped");
let mapped = values.map( v => ":" + v + ":")
console.log("mapped=", mapped);

console.log("\nforEach");
values.forEach( (v,i) => console.log( v + "," + i));
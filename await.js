

async function what() {
let promiseOne = Promise.resolve( { name: "able", value: 98});

let result = await promiseOne;

console.log("result ", result);
}

what();
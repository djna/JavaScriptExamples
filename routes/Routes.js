

let cityList = [ 
    "Aberdeen", "Bradford", "Chester", "Derby", "Ely", "Fishguard", "Grimsby",
    "Hull", "Ipswich", "Jarrow", "Keynsham", "Luton", "Morecambe", "Norwich",
    "Otley", "Poole", "Quantocks"
                ];

let howMany = +process.argv[2];

if ( !howMany ){
    console.log(`Valid number not provided, using default.`);
    howMany = 3;
}

if (howMany > cityList.length){
    howMany = cityList.length;
    console.log(`Too many cityList requested, using ${howMany}.`);
}

console.log (`visiting ${howMany} cities `);
let selectedList = cityList.slice(0, howMany);
console.log (`Investigating visiting all of these: ${selectedList.join(", ")}  `);

let startTime = new Date();
visit ( selectedList);
let endTime = new Date();

console.log(`Visiting ${howMany} took ${endTime-startTime}ms`)

function visit( cities, history){
    
    let separator;
    if ( ! history){
        history = "";
        separator = "";
    } else {
        separator = ", ";
    }

    if ( cities.length == 0){
        // comment out this line when recording timings
        // we don't want to measure the time taken printing.
        console.log(`One journey: ${history}`);
        return;
    } else{
        // Printing work in progress, comment this out to reduce noise
        console.log(`Visiting ${cities}, after :${history}:`);
    }

    for (let i = 0; i < cities.length; i++){
        let currentLocation = cities[i];
    
        // remove current item using splice
        // but splice works directly on array, so make a copy first
        let remaining = [...cities];
        remaining.splice(i,1);
        visit(remaining, history + separator + currentLocation);
    }
}



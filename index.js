// Basic solution using var
function countDownVarBasic() {
    for (var i = 3; i >= 0; i--) {
        (function () {
            var j = i;
            setTimeout(function () {
                console.log(j || "Lift-off!");
            }, (3 - j) * 1000);
        })();
    }
}

// Variation on var that passes in i to the IIFE
function countDownVarVariation() {
    for (var i = 3; i >= 0; i--) {
        (function (j) {
            setTimeout(function () {
                console.log(j || "Lift-off!");
            }, (3 - j) * 1000);
        })(i);
    }
}

// Basic solution using let
function countDownLetBasic() {
    for (var i = 3; i >= 0; i--) {
        let j = i;
        setTimeout(function () {
            console.log(j || "Lift-off!");
        }, (3 - j) * 1000);
    }
}

// Variation on let that makes use of let's scoping in for loops
function countDownLetVariation() {
    for (let i = 3; i >= 0; i--) {
        setTimeout(function () {
            console.log(i || "Lift-off!");
        }, (3 - i) * 1000);
    }
}

// Recursive solution
function countDownRecursiveOld(time) {
    (function tick() {
        console.log(time || "Lift-off!");
        time--;
        if (time >= 0) {
            setTimeout(tick, 1000);
        }
    })();
}

// Recursive solution
function countDownRecursive(time) {
    function tick() {
        console.log(time || "Lift-off!");
        time--;
        if (time >= 0) {
            setTimeout(tick, 1000);
        }
    };
    tick(3);
}

//countDownVarBasic();
//countDownVarVariation();
//countDownLetBasic();
//countDownLetVariation();
countDownRecursive(3);
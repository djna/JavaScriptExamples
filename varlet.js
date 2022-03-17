
function countDown() {
    
    for (var i = 3; i >= 0; i--) {
        let toGo = i;
        setTimeout(function() {
            console.log(toGo || "Lift-off!");
        }, (3 - i) * 1000);
    }
}
countDown();
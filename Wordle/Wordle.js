var TennisGame2 = function(player1Name, player2Name) {
    this.P1point = 0;
    this.P2point = 0;

    this.P1res = "";
    this.P2res = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

let pointText = ["Love", "Fifteen", "Thirty", "Forty"];

TennisGame2.prototype.getScore = function() {    
    if ( this.isDeuceAdvantageWin() ) {
        if (this.P1point == this.P2point ){
            return "Deuce";  
        }  
        let leader = this.P1point > this.P2point ? this.player1Name : this.player2Name;
        return (Math.abs(this.P1point - this.P2point)  == 1) ? "Advantage " + leader : "Win for " + leader;   
    } else { 
        let P1score = pointText[this.P1point];
        let P2score = pointText[this.P2point];
        return (this.P1point == this.P2point) ? P1score + "-All" : P1score + "-" + P2score;
    }
}

TennisGame2.prototype.isDeuceAdvantageWin = function (){
    return   this.P1point >= pointText.length 
    || this.P2point >= pointText.length 
    || (this.P1point == 3 && this.P2point == 3) ;
}



TennisGame2.prototype.SetP1Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P1Score();
    }
};

TennisGame2.prototype.SetP2Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P2Score();
    }
};

TennisGame2.prototype.P1Score = function() {
    this.P1point++;
};

TennisGame2.prototype.P2Score = function() {
    this.P2point++;
};

TennisGame2.prototype.wonPoint = function(player) {
    if (player === this.player1Name)
        this.P1Score();
    else
        this.P2Score();
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}
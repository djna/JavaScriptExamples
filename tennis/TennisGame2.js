var TennisGame2 = function(player1Name, player2Name) {
    this.P1point = 0;
    this.P2point = 0;

    this.P1res = "";
    this.P2res = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame2.prototype.getScore = function() {
    let score = "";

    if ( (this.P1point >= 4 || this.P2point >= 4 )
          && (Math.abs(this.P1point - this.P2point) ) >= 2) {
        let winner = this.P1point > this.P2point ? this.player1Name : this.player2Name
        score = `Win for ${winner}`;
    } 
    else if ( (this.P1point >= 4 || this.P2point >= 4 )
         && (Math.abs(this.P1point - this.P2point) ) == 1) {
       let leader = this.P1point > this.P2point ? this.player1Name : this.player2Name
       score = `Advantage ${leader}`;
    }
    else if (this.P1point === this.P2point && this.P1point > 2){
        score = "Deuce";
    }
    else if (this.P1point === this.P2point && this.P1point <= 2) {  
        score = `${this.scoreText(this.P1point)}-All`;
    }   
    else  {
        this.P1res = this.scoreText(this.P1point);
        this.P2res = this.scoreText(this.P2point);
        score = this.P1res + "-" + this.P2res;
    } 
    
    return score;
};

TennisGame2.prototype.scoreText = function(score){
    switch (score){
        case 0: return "Love";
        case 1:  return "Fifteen";
        case 2:  return "Thirty";
        case 3:  return "Forty";
        default: return `unknown score ${score}`;
    }  
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
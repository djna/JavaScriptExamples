

let Account = function(id){

    this.accountSummary = {
        "id" : id,
        "status" : "UNKNOWN"
    }

    this.fetchAccount = function() {
        // fake REST account fetcher

        setTimeout(
            function() { this.accountSummary = {
                "id" : id,
                "status" : "OK",
                "name:" : "Fake Name",
                "balance" : 987.65
            }
        }
         , 1000); 
    }

    this.getSummary = function() {
        return this.accountSummary;
    }

    this.toString = function(){
        return JSON.stringify(this.accountSummary);
    }
}

let account = new Account(17);

console.log("Account: " + account);

account.fetchAccount();

setTimeout(
    () => console.log("Account after wait: " + account)
 , 2000);

 

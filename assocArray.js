

let accounts = {};
function addAccount(account){

    //if ( ! accounts[account] ){
    //    accounts[account] = 0;
    //}
    accounts[account] ||= 0;
    accounts[account]++;

}

let myAccounts = ["a", "b", "a", "c", "a", "c"];

myAccounts.forEach( a => addAccount(a));

console.log("Accounts: ", accounts)
const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"


// accountId = 2 // not allowed
 accountEmail = "hc@hc.com"
 accountPassword = "2121212221"
 accountCity = "Bengaluru"
console.log(accountId);
let accountState;

/*

Prefer not to use var
because of issue in block scope and functional scope

*/
console.log([accountId, accountEmail, accountPassword, accountCity,accountState]);
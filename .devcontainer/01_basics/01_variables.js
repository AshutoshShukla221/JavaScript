const accountId = 21457875782
let accountEmail = "ashutoshukla217.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

// accountId = 2 // not allowed


accountEmail = "badsfgs4532v@gmail.com"
accountPassword = "21212121"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
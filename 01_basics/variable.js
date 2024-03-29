const accountId  = 123123123;
let accountEmail = "rahulkumar@google.com";
var accountName = "rahul Kumar";
accountCity = "Agra"; //not recomended
let accountState;

// accountId=2; //not allowed
accountEmail = "r@gmail.com";
accountName = "r";
accountCity= "banguluru";

/*
prefered not to use var
beacuse of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountName,accountCity,accountState]);
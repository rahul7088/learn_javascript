const accountId  = 123123123;
let accountEmail = "rahulkumar@google.com";
var accountPassword = "rahul Kumar";
accountCity = "Agra"; //not recomended
let accountState;

//accountId=2; //not allowed (TypeError: Assignment to constant variable.)
accountEmail = "r@gmail.com";
accountPassword = "r";
accountCity= "banguluru";

/*
prefered not to use var
beacuse of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
// Write your solution in this file!
// customerName
var customerName = 'bob'

//upperCaseCustomerName

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
//upperCaseCustomerName(); // return BOB
console.log(customerName);

// setBestCustomer

var bestCustomer

function setBestCustomer() {
    bestCustomer = 'not bob';
    //return customerName;
}
//setBestCustomer(); // returns not bob
console.log(bestCustomer);

//overwriteBestCustomer

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
//overwriteBestCustomer(); // returns maybe bob
console.log(bestCustomer);

//leastFavoriteCustomer

const leastFavoriteCustomer = 'john'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'same old bob';
}
changeLeastFavoriteCustomer();
console.log(leastFavoriteCustomer);
/* Write a class to calculate uber price. */

var baseFee = 21;
var cities = ["Mumbai", "Pune", "Delhi", "Banglore"];
var uberRates = [500, 350, 1500, 750];

var customerName = "Prathamesh kamble";
// var customerCity = "Delhi";
alert("You can enter Cities as Per:- Mumbai, Pune, Delhi, Banglore")
var customerCity=prompt();
console.log(`Hello ${customerName}, Welcome to the Uber`);
function getRate(customerCity) {

    function uberRate(customerCity, index) {

        let finalRate = (uberRates[index]) * baseFee;
        return finalRate;
    }

    console.log(customerCity, "Total Fare Will be:", uberRate(customerCity, cities.indexOf(customerCity)));
}

getRate(customerCity); 
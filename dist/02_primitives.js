"use strict";
let userName = "kayes";
let age = 30;
let isMarried = false;
let big = 1n;
//Operator '+' cannot be applied to types 'number' and 'bigint'
// console.log(age + big);
const token = Symbol("token");
function yearsToDay(years) {
    return years * 365;
}
console.log(userName.toLowerCase());
console.log(yearsToDay(10));

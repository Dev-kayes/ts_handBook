let userName: string = "kayes";
let age: number = 30;
let isMarried: boolean = false;

let big: bigint = 1n;
//Operator '+' cannot be applied to types 'number' and 'bigint'
// console.log(age + big);

const token: unique symbol = Symbol("token");

function yearsToDay(years: number): number {
  return years * 365;
}
console.log(userName.toLowerCase());
console.log(yearsToDay(10));

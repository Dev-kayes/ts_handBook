// Goal -> is to understand when to let typescript infer a type
// ts => knows js well
// when ts going to write the type or when you are going to write
let count = 0; // ts sees number
const site = "https://google.com"; // ts sees string
// over annotaion is not bad => just noisy
export function add(a, b) {
    return a + b;
}
console.log(add(5, 3));
// you should also annotate when the type is not obvious
let maybe;
maybe = Math.random() > 0.5 ? "test" : 42;

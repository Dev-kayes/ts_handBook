// console.log("Hello world!");
// // This is an industrial-grade general-purpose greeter function:
// function greet(person: string, date: Date) {
//   console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }

// greet("Maddison", new Date());

// let msg = "hello there!";
// let myName: string = "Alice";
// Parameter type annotation appear before the Parameter name
// function greet(name: string) {
//   console.log("Hello, " + name.toUpperCase() + "!!");
// }
// Return Type annnotation appear after the Parameter list
// function getFavoriteNumber(): number {
//   return 26;
// }
// If you want to annotate the return type of a function which returns a promise, you should use the Promise type:

// async function getFavoriteNumber(): Promise<number> {
//   return 26;
// }
// ==============================================
// The parameter's type annotation is an object type
// function printCoord(pt: { x: number; y: number }) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }
// printCoord({ x: 3, y: 7 });
// function printCode(alias: { name: string; age: number; height: number }) {
//   console.log(
//     `His name is ${alias.name} ,age is${alias.age} & height is ${alias.height} `,
//   );
// }
// printCode({
//   name: "kayes",
//   age: 18,
//   height: 1.88,
// });
// Optional Properties
// Object types can also specify that some or all of their properties are optional. To do this, add a ? after the property name:

// function printName(obj: { first: string; last?: string }) {
//   // ...
// }
// // Both OK
// printName({ first: "Bob" });
// printName({ first: "Alice", last: "Alisson" });
// In JavaScript, if you access a property that doesn’t exist, you’ll get the value undefined rather than a runtime error. Because of this, when you read from an optional property, you’ll have to check for undefined before using it.

// function printName(obj: { first: string; last?: string }) {
//   // Error - might crash if 'obj.last' wasn't provided!
//   console.log(obj.last.toUpperCase());
// 'obj.last' is possibly 'undefined'.
//   if (obj.last !== undefined) {
//     // OK
//     console.log(obj.last.toUpperCase());
//   }

//   // A safe alternative using modern JavaScript syntax:
//   console.log(obj.last?.toUpperCase());

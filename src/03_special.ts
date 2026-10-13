//strickNullCheck
// let title: string = "into";
// title = undefined;
// console.log(title);

// const subTitle: string | undefined = "Molla";
// const subTitle: string | undefined = undefined;

// Void: function doesn't return an useful value
// // never return
// function never(msg: string): never {
//   throw new Error(msg);
// }

// Do not use any => use it as less as possible:
const valueAny: any = JSON.parse('{"name": "kayes"}');
valueAny.notThere.ToFixed(2); // This will compile but can break/explode in run time

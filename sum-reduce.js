console.log("---array functions---");

// result: is anything
// sum

const arr1 = [
  { d: "dr2", qty: 10 },
  { d: "dr1", qty: 20 },
];
console.log("given\n", arr1);

const sum = arr1
  .map(function (item) {
    return item.qty;
  })
  .reduce((accu, item) => {
    return accu + item;
  }, 0);

/*
const newArray = arr1.map(function (item) {
  return item.qty;
});

let sum = 0;
for (let i in newArray) {
  sum = sum + newArray[i];
}

const sumR = newArray.reduce(function (accu, item) {
  return accu + item;
}, 0);
*/

console.log("result\n", sum);

console.log("\n");

// reduce vs map
/* difference
1. map, will always result in a new array of the 
    same length as the original
  whereas,
  reduce, will result with anything

*/

console.log("---array functions---");

const arr1 = [
  { d: "dr2", qty: 10 },
  { d: "dr1", qty: 20 },
  { d: "dr1", qty: 8 },
];
console.log("given\n", arr1);

const filterMap = arr1.reduce(function (acc, item) {
  if (item.qty >= 10) {
    return [...acc, item.d];
  }

  return [...acc];
}, []);

console.log("result\n", filterMap);

console.log("\n");

// reduce vs map
/* difference
1. map, will always result in a new array of the 
    same length as the original
  whereas,
  reduce, will result with anything

*/

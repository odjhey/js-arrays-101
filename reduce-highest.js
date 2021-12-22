console.log("---array functions---");

const arr1 = [
  { d: "dr2", qty: 190 },
  { d: "dr1", qty: 80 },
  { d: "dr1", qty: 48 },
];
console.log("given\n", arr1);

const highest = arr1.reduce(function (accu, item) {
  if (accu === null) {
    return item;
  }

  if (item.qty > accu.qty) {
    return item;
  }

  return accu;
}, null);

console.log("result\n", highest);

console.log("\n");

// reduce vs map
/* difference
1. map, will always result in a new array of the 
    same length as the original
  whereas,
  reduce, will result with anything

*/

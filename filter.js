console.log("---array functions---");

// filter
// resulting value will always be
// another array with the different length
// from the original
const arr1 = [
  { d: "dr2", qty: 10 },
  { d: "dr1", qty: 20 },
];
console.log("given\n", arr1);

const newArray = arr1.filter(function (item) {
  return item.qty <= 10;
});

console.log("result\n", newArray);
console.log("given\n", arr1);

console.log("\n");

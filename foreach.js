console.log("---array functions---");

const arr1 = [
  { d: "dr2", qty: 190 },
  { d: "dr1", qty: 80 },
  { d: "dr1", qty: 48 },
];
console.log("given\n", arr1);

// forEach/map
// map (fn (item:any, index:int): any) : []
// forEach( fn (item:any, index:int) : void) : void
//   for loop

let x = 0;
for (let i in arr1) {
  x = x + arr1[i].qty;
}

let y = 0;
arr1.forEach(function (item) {
  y = y + item.qty;
});
const a = arr1.forEach(function (item) {
  y = y + item.qty;
});

console.log("result-x\n", x);
console.log("result-y\n", y);
console.log("result-a\n", a);

console.log("\n");

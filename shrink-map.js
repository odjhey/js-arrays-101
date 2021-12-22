console.log("---array functions---");

// map
// 2) bawas value, shrink data
// map
// [ 1 , 2 ]  map   [ a, b]
// in map, resulting value will always be
// another array with the same length with the original
const arr1 = [
  { d: "dr2", qty: 10 },
  { d: "dr1", qty: 20 },
];
console.log("given\n", arr1);

// arr1 = ["1a", 2, 3]
// map( fn ( item, index ) : any )
//    1st - fn("1a" , 0)
//    2nd - fn (2 , 1)
//    3rd - fn (3 , 2)
const newArray = arr1.map(function (item) {
  return item.qty;
});

console.log("result\n", newArray);

console.log("\n");

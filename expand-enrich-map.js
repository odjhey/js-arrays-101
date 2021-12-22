console.log("---array functions---");

// map
// 1) enrich/enhance the value
const arr1 = [{ date: "2021-12-01" }, { date: "2021-01-31" }];
console.log("given\n", arr1);

// arr1 = ["1a", 2, 3]
// map( fn ( item, index ) : any )
//    1st - fn("1a" , 0)
//    2nd - fn (2 , 1)
//    3rd - fn (3 , 2)
const explodedDates = arr1.map(function (item) {
  // item = { date: "2021-01-31"}
  /*
  const splitted = item.date.split("-");
  return {
    fullDate: item.date,
    date: splitted[2],
    year: splitted[0],
    month: splitted[1],
  };
  */
  const [year, month, date] = item.date.split("-");
  return { fullDate: item.date, year, month, date };
});

const explodedDates2 = arr1.map((item) => {
  const [year, month, date] = item.date.split("-");
  return { fuDate: item.date, year, month, date };
});

console.log("result\n", explodedDates2);

console.log("\n");

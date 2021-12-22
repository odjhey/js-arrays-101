/*
const fn = async function () {
  const a = await something()
}
*/

// [] = timers
// [] = events
// [  ] = normal event queue
// [ function(res) ] = async / callback queue

// callbacks

/*
forever for-loop (aka event-loop) {
  timers
  call fn from event/normal queue
  check call queue
    call callback
}
*/

console.log("concurrency-promise");

/*
// callback
function asdf( options,  callback ) {
  // when ready
  callback()
}
*/

function createPromise(url) {
  return new Promise((response, reject) => {
    require("http").get(url, function (res) {
      res.on("data", function (d) {
        response(d.toString());
      });
    });
  });
}

const getDelivery = createPromise(
  "http://try-gorilla-mux-golang.apps.odee.io/ping?echo=asdfasdfasdf&timeout=1"
);
const getDeliveryItems = createPromise(
  "http://try-gorilla-mux-golang.apps.odee.io/ping?echo=asdfasdfasdf&timeout=1"
);
const others = createPromise(
  "http://try-gorilla-mux-golang.apps.odee.io/ping?echo=asdfasdfasdf&timeout=1"
);

/*
console.log(getDelivery);
console.log(getDeliveryItems);
console.log(others);
*/

getDelivery
  .then((val) => {
    console.log(val);
    return getDeliveryItems;
  })
  .then((d) => {
    console.log("items", d);
    return others;
  })
  .then((d) => {
    console.log("items", d);
  });

/*
require("http").get(
  "http://try-gorilla-mux-golang.apps.odee.io/ping?echo=asdfasdfasdf&timeout=2",
  function (res) {
    res.on("data", function (d) {
      console.log(d.toString());

      require("http").get(
        "http://try-gorilla-mux-golang.apps.odee.io/ping?echo=asdfasdfasdf&timeout=2",
        function (res) {
          res.on("data", function (d) {
            console.log(d.toString());

            require("http").get(
              "http://try-gorilla-mux-golang.apps.odee.io/ping?echo=asdfasdfasdf&timeout=2",
              function (res) {
                res.on("data", function (d) {
                  console.log(d.toString());
                });
              }
            );
          });
        }
      );
    });
  }
);
*/

// read about callback-hell

console.log("cena");

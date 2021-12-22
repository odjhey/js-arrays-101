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

console.log("concurrency-callbacks");

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

// read about callback-hell

console.log("cena");

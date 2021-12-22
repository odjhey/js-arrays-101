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
    require("https").get(url, function (res) {
      var body = "";

      res.on("data", function (chunk) {
        body += chunk;
      });

      res.on("end", function () {
        var fbResponse = JSON.parse(body);
        response(fbResponse);
      });
    });
  });
}

const arrayD = ["1", "4", "7", "137"];
const promises = arrayD.map((item) => {
  return createPromise(`https://pokeapi.co/api/v2/pokemon/${item}`);
});

Promise.all(promises).then((d) => {
  console.log("d", Array.isArray(d));
  const shrinked = d.map((pokemon) => {
    return { name: pokemon.name, type: pokemon.types[0].type.name };
  });
  const withRel = shrinked.map((d) => {
    return { ...d, related: [] };
  });
  console.log(withRel);
});

console.log("cena");

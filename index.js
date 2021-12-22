console.log("concurrency-promise");
// async await

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

// iif_
(async function () {
  const arrayD = ["1", "4", "7", "137"];

  const promises = arrayD.map((item) => {
    return createPromise(`https://pokeapi.co/api/v2/pokemon/${item}`);
  });

  const pokemons = await Promise.all(promises);

  function pokeShrinker(pokemon) {
    return { name: pokemon.name, type: pokemon.types[0].type };
  }

  const shrinked = pokemons.map(pokeShrinker);

  const typeRelPokemonPromises = shrinked.map(({ type }) => {
    return createPromise(type.url);
  });

  const typeRelPokemon = await Promise.all(typeRelPokemonPromises);
  const relPokemons = typeRelPokemon.map((t) => {
    return t.pokemon.map((p) => p.pokemon.name).splice(0, 10);
  });

  const withRel = shrinked.map((d, i) => {
    return { ...d, sameElement: relPokemons[i] };
  });
  console.log(withRel);
})();

console.log("cena");

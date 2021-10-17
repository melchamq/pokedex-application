//Pokedex application project

let pokemonList = [
  let pokemon1 = {name: 'Rapidash', height: 10, type: ['fire'] };
  let pokemon2 = {name: 'Haunter', height: 8, type: ['ghost', 'poison'] };
  let pokemon3 = {name: 'Articuno', height: 12, type: ['ice', 'flying'] };
  let pokemon4 = {name: 'Houndoom', height: 5, type: ['dark', 'fire'] };
  let pokemon5 = {name: 'Marill', height: 3, type: ['fairy', 'water'] };
];

pokemonList = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5];
console.log(pokemonList);

for (let i=0; i <pokemonList.length; i++) {
  if (pokemonList[i].height >11) {
  document.write(pokemonList[i].name + ' - Wow that\'s big!');
  }
}

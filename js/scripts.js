//Pokedex application project

let pokemonList = [
  { name: 'Rapidash', height: 10, type: ['fire'] };
  { name: 'Haunter', height: 8, type: ['ghost', 'poison'] };
  { name: 'Articuno', height: 12, type: ['ice', 'flying'] };
  { name: 'Houndoom', height: 5, type: ['dark', 'fire'] };
  { name: 'Marill', height: 3, type: ['fairy', 'water'] };
];

pokemonList = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5];
console.log(pokemonList);

for (let i=0; i <pokemonList.length; i++) {
  if (pokemonList[i].height >11) {
  document.write(pokemonList[i].name + ' - Wow that\'s big!');
  }
}

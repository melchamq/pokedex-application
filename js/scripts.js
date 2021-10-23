//Pokedex application project

let pokemonList = [
  { name: 'Rapidash', height: 1.8, type: ['fire'] },
  { name: 'Haunter', height: 1.5, type: ['ghost', 'poison'] },
  { name: 'Articuno', height: 2, type: ['ice', 'flying'] },
  { name: 'Houndoom', height: 1.3, type: ['dark', 'fire'] },
  { name: 'Marill', height: 0.5, type: ['fairy', 'water'] },
];

console.log(pokemonList);

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 1.9) {
    document.write('<li>'+ pokemonList[i].name + ' (height: ' + pokemonList[i].height + 'm)' + '  <b> *Wow- that\'s big!* </b></li>')
  } else {
      document.write('<li>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + 'm)</li>')
    }
}

//Pokedex application project

let pokemonList = [
  { name: 'Rapidash', height: 10, type: ['fire'] },
  { name: 'Haunter', height: 8, type: ['ghost', 'poison'] },
  { name: 'Articuno', height: 12, type: ['ice', 'flying'] },
  { name: 'Houndoom', height: 5, type: ['dark', 'fire'] },
  { name: 'Marill', height: 3, type: ['fairy', 'water'] },
];

console.log(pokemonList);

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 11) {
    document.write('<li>'+ pokemonList[i].name + ' : ' + pokemonList[i].height + '  <b> ( Wow- that\'s big! ) </b></li>')
  } else {
      document.write('<li>' + pokemonList[i].name + ' : ' + pokemonList[i].height + '</li>')
    }
}

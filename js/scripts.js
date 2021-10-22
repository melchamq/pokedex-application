//Pokedex application project

let pokemonList = [
  { name: 'Rapidash', height: 10, type: ['fire'] };
  { name: 'Haunter', height: 8, type: ['ghost', 'poison'] };
  { name: 'Articuno', height: 12, type: ['ice', 'flying'] };
  { name: 'Houndoom', height: 5, type: ['dark', 'fire'] };
  { name: 'Marill', height: 3, type: ['fairy', 'water'] };
];

for (i = 0; i < pokemonList.length; i++)
  { document.write('<li>', pokemonList[i], '</li>') }

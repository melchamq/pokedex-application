//Pokedex application project

let pokemonList = [
  { name: 'Rapidash', height: 1.8, type: ['fire'] },
  { name: 'Haunter', height: 1.5, type: ['ghost', 'poison'] },
  { name: 'Articuno', height: 2, type: ['ice', 'flying'] },
  { name: 'Houndoom', height: 1.3, type: ['dark', 'fire'] },
  { name: 'Marill', height: 0.5, type: ['fairy', 'water'] },
];

let pokemonList2 = [
  { name: 'Beedrill', height: 1.0, type: ['bug', 'poison'] },
  { name: 'Raticate', height: 0.7, type: ['normal'] },
  { name: 'Mankey', height: 0.5, type: ['fighting'] },
  { name: 'Ekans', height: 2.0, type: ['poison'] },
  { name: 'Lickitung', height: 1.2, type: ['normal'] },
];

function printArrayDetails(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].height > 1.9) {
      document.write('<li>'+ list[i].name + ' (height: ' + list[i].height + 'm)' + '  <b> *Wow- that\'s big!* </b></li>')
    } else {
        document.write('<li>' + list[i].name + ' (height: ' + list[i].height + 'm)</li>')
      }
    console.log(list[i].name);
  }
}

printArrayDetails(pokemonList);
printArrayDetails(pokemonList2);

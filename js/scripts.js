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

console.log(repository);

function printArrayDetails() {
  for (let i = 0; i < repository.length; i++) {
    if (repository[i].height > 1.9) {
      document.write('<li>'+ repository[i].name + ' (height: ' + repository[i].height + 'm)' + '  <b> *Wow- that\'s big!* </b></li>')
    } else {
        document.write('<li>' + repository[i].name + ' (height: ' + repository[i].height + 'm)</li>')
      }
  }
}

printArrayDetails();
printArrayDetails();

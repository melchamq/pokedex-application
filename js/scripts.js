//Pokedex application project

let repository = [
  { name: 'Rapidash', height: 1.8, type: ['fire'] },
  { name: 'Haunter', height: 1.5, type: ['ghost', 'poison'] },
  { name: 'Articuno', height: 2, type: ['ice', 'flying'] },
  { name: 'Houndoom', height: 1.3, type: ['dark', 'fire'] },
  { name: 'Marill', height: 0.5, type: ['fairy', 'water'] },
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

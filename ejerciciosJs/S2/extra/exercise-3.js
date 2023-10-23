const users = [
    {name: 'Manolo el del bombo',
    favoritesSounds: {
        waves: {format: 'mp3', volume: 50},
        rain: {format: 'ogg', volume: 60},
        firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
    favoritesSounds: {
        waves: {format: 'mp3', volume: 30},
        shower: {format: 'ogg', volume: 55},
        train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
    favoritesSounds: {
        shower: {format: 'mp3', volume: 50},
        train: {format: 'ogg', volume: 60},
        firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
    favoritesSounds: {
        waves: {format: 'mp3', volume: 67},
        wind: {format: 'ogg', volume: 35},
        firecamp: {format: 'mp3', volume: 60},
        }
    },
];
let favSounds = []
for (sounds of users){
    for (type in sounds.favoritesSounds)
    // console.log(type);
    favSounds.push(type);
};
// console.log(favSounds);

const result = {};

// contador que incrementa uno el diccionario si el valor existe
favSounds.forEach((value) => {
  result[value] = (result[value] || 0) +1;
});
console.log(result);

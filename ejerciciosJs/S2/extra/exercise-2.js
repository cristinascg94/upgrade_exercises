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
]
let typesOfSounds = [];
let total = 0;
let n_elementos = 0;
for( sounds of users){
    // console.log(sounds)
    for (type in sounds.favoritesSounds){
        // typesOfSounds.push(sounds['favoritesSounds'][type]['volume']);
        total += sounds['favoritesSounds'][type]['volume'];
        n_elementos +=1
    }
}
console.log(typesOfSounds);
console.log(total);

let media = total / n_elementos;
console.log(media);

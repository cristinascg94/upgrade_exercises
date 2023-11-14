// Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.


const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

let names = users.map(function(user) {
    const userName =user.name;
    if(userName.charAt(0) === 'A') {
        return 'Anacleto'
    }
    return users.name;
});


// otra forma de hacerlo
// if (userName.startsWith('A')) {
//     return 'Anacleto'
// };
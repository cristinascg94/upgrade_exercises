const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
// let keys = Object.keys(alien);
for (let key in alien){
    let value = alien[key];
    console.log(key + ' : ' + value);

}
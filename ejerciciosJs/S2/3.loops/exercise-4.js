const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 40, name: 'El gato con Guantes'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato felix'}];

for (toy of toys){
    if(toy['name'].includes('gato')){
        var idx = toys.indexOf(toy);
        toys.splice(idx,1);
        // console.log(idx);
    }
}
console.log(toys);
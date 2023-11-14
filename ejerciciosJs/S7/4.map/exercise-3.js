// Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.


const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

const citiesName = cities.map(function(city){
    const cityName = city.name;
    if (city.isVisited === true) {
        city += ' (visitado)';
    }
    return cityName;
});

// tiempo 2,18 para arrow fuction más if ternario
const placesToTravel = [{id: 5, name: 'Japan'},
 {id: 11, name: 'Venecia'}, 
 {id: 23, name: 'Murcia'}, 
 {id: 40, name: 'Santander'}, 
 {id: 44, name: 'Filipinas'}, 
 {id: 59, name: 'Madagascar'}]

for (place in placesToTravel){
    console.log(place);
    if(placesToTravel[place]['id'] == 11 || placesToTravel[place]['id'] == 40 ){
        // let indexToRemove = place.indexOf(11, 40);
       console.log(placesToTravel[place]);
       placesToTravel.splice(place,1);
    }
}
console.log(placesToTravel);
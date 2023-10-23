let text = "erase una vez un Caracol Mosquito una Mosquito Mosquito"
let array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
// function findArrayIndex(array, text) {
//     let newText = text.split(' ');
//     let position = []
//     for (element of array){
//         console.log(element)

//         // var idx = array.indexOf(element);
//         // while (idx != -1) {
//         //     indices.push(idx);
//         //     idx = array.indexOf(element, idx + 1);
//         // }
//     }
    

// }
// let resultado = findArrayIndex(array, text);
// console.log(resultado)



// let newText = text.split(' ');
// for (element of array){
//     let position = [];
//     console.log(element)
//     var idx = newText.indexOf(element);
//     while (idx != -1) {
//         position.push(idx);
//         idx = array.indexOf(element, idx);
//     }
//     console.log(position);
// }
for (element of array){
    var indices = [];
    var text_1 = text.split(' ');
    var idx = text_1.indexOf(element);
    while (idx != -1) {
    indices.push(idx);
    idx = text_1.indexOf(element, idx + 1);
    }
    console.log(element)
    console.log(indices)
    }
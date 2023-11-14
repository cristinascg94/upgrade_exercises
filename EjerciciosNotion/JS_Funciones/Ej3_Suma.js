const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(listNumber) {
    let sumNumber = 0;
    for (let i in listNumber) {
        sumNumber += listNumber[i];
    }
    return sumNumber;
}
// aquí consigo el indice y hago la suma cogiendo la posicion de la lista
console.log(sumAll(numbers));

// Forma de Hector

function sumAll(listNumber) {
    let total = 0;
    for (let num of listNumber) {
        total += num;
    }
    return total;
}
// aquí cojo el numero y hago la suma directamente con los numeros
console.log(sumAll(numbers));
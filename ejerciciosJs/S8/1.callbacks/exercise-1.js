const numbersList = [];

const sum =(a,b) =>{
    return a+b;
}

const subtract = (a,b) =>{
    return a-b;
}

const father = (a, b, callback) => {
    numbersList.push(callback(a,b));    

}

father(9,7, sum);
father(5,1,subtract);
function sum(numberOne , numberTwo) {
    if (numberOne > numberTwo){
        return numberOne;
    }
    else if (numberOne < numberTwo) {
        return numberTwo;
    }
    else {
        return (alert('no hay ninguno mayor que otro'));
    }
  }
console.log(sum(2,7));
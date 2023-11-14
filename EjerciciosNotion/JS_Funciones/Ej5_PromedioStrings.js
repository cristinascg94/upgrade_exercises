const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(list) {
    let sumNumbers = 0;
    let sumWords = 0;
    for (elm of list){
        if (typeof elm === 'number') {
            sumNumbers += elm;
        }
        else if (typeof elm === 'string') {
            sumWords += elm.length;
        }
    }
    return sumNumbers + sumWords;
}

console.log(averageWord(mixedElements));
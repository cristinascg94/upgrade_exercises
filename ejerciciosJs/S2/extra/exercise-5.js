function rollDice() {
    return Math.floor (Math.random() *sides) + 1;
}
for (let i = 0; i<50; i++){
    console.log(rollDice(6));
}

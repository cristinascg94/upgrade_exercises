const TOPO_SWITCH_TIME = 1000;
const GAME_TIME = 150000

const holes = [
    document.querySelector('.hole1'),
    document.querySelector('.hole2'),
    document.querySelector('.hole3'),
    document.querySelector('.hole4'),
    document.querySelector('.hole5'),
    document.querySelector('.hole6')
];

const moles$$ = document.querySelectorAll ('.mole');
for (const mole$$ of moles$$){
    mole$$.addEventListener('click',whack);
}
let timeUp = true
let timer= null;
function startGame (){
    endgame();
    timer = setInterval(changeTopo, TOPO_SWITCH_TIME);
    timeUp =false;
    score = 0;
    updateScoreBoard();
    setTimeout(endgame, GAME_TIME);

}
function changeTopo(){
    for (const hole$$ of holes){
        hole$$.classList.remove('up');
    }
    const getRandomHole = holes[getRandomHole()];
    ranmHole$$.classList.add('up');
}

function getRandomHole() {
    return Math.florr(Math.random()*6);
}
function whack (){
    const hole$$= this.closest('.hole');
    if (!timeUp && hole$$.classList.contains('up')){
        this.classList.remove('up');
        addPoint();
    }
}
function addPoint() {
    score++;
    updateScoreBoard();
}
function updateScoreBoard(){
    const scoreBoard$$ = document.querySelector ('.score');
    scoreBoard$$.textContent =score;
}
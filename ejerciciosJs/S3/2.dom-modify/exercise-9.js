const parrafo$$ = document.createElement('p');
parrafo$$.textContent = 'Voy dentro!'
const divInsert$$ = document.querySelectorAll('div.fn-insert-here');
for (const div of divInsert$$) {
    div.appendChild(parrafo$$);
}
const div$$ = document.createElement('div');
document.body.appendChild(div$$);


for (let i = 0; i < 7; i++) {
    const p$$ = document.createElement('p');
    p$$.innerHTML = 'texto' + i;
    div$$.appendChild(p$$);    
}
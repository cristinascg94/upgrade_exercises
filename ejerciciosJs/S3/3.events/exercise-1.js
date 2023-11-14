const button$$ = document.createElement('button');
button$$.textContent = 'Click me';
button$$.setAttribute('id','btnToClick');
button$$.addEventListener('click',message);
document.body.appendChild(button$$)

function message (event) {
    console.log(event);
}

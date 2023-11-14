const input$$ = document.querySelector('input');
input$$.addEventListener('focus', showValue);

function showValue (event) {
    const target$$ = event.target;
    console.log(target$$.value);
}
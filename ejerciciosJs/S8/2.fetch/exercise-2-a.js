const baseUrl = 'https://api.nationalize.io?name=';

const button$$ = document.querySelector('button');
button$$.addEventListener('click',respuesta);

async function respuesta () {
    const input$$ = document.querySelector('input');
    valorInput = input$$.value;
    const response = await fetch(baseUrl+valorInput);
    const json =await response.json;
    return json;
}
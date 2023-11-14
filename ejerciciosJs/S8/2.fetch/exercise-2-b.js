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
function createElements (data) {
    const container$$ = document.querySelector('#container');
    container$$.innerHTML= '';
    for (const country of data.country) {
        const porcentaje = country.probability * 100;
        const p$$ = document.createElement('p');
        p$$.textContent = 'el nombre' + data.name + 'tiene un ' + porcentaje + 'por ciento de ser de' + country.country_id;
        container$$.appendChild(p$$);
    }
}
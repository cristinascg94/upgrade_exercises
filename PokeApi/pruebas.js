const myMain$$ = document.querySelector('main');

const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/"
const starwarsApi = "https://starwars-server.vercel.app/characters/"
const digiApi = 'https://digimon-api.vercel.app/api/digimon'
// fetch (starwarsApi)
// .then((response) => response.json())
// // console.log(response))
// .then((res)=> console.log(res.data.characters))

const getPokemons = async(n) => {

    const response = await fetch(pokeApiUrl+n)

    const res =await response.json()

    // console.log(res);

    return res

}

const getAll = async () => {

    let pokemonAll = [];

    for (let i=1; i < 151; i++){
    
        let pokemonApi = await getPokemons(i);

        pokemonAll.push(pokemonApi);
    }
    // console.log(pokemonAll);
    return pokemonAll;
}

const mapPokemons = (pokemonsWithoutMap) => {
    // console.log(pokemonsWithoutMap);
    return pokemonsWithoutMap.map((pokemon) =>({
        nombre: pokemon.name,
        tipo: pokemon.types[0].type.name,
        img: pokemon.sprites.back_default,

    }))
    console.log(pokemonMap);
    return pokemonMap;
}

const drawPokemons = (pokemons) => {
    console.log(pokemons);
    for (const pokemon of pokemons) {
        const div$$ = document.createElement("div");
    div$$.innerHTML = `
    <figure class="carta">
        <h2>${pokemon.nombre}</h2>
        <img src="${pokemon.img}" alt="${pokemon.nombre}">
        <p>${pokemon.tipo}</p>
    </figure>
    `;
    myMain$$.appendChild(div$$);
    }
}

const init = async() =>{
    const pokemonList =await getAll();
    // console.log(pokemonList);

    const pokemonsMapped = mapPokemons(pokemonList);
    // console.log(pokemonsMapped);

    drawPokemons(pokemonsMapped);

}
init()
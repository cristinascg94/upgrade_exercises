const myDiv$$ = document.querySelector('.container');

const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/"

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
        id: pokemon.id,
        tipo: pokemon.types[0].type.name,
        img: pokemon.sprites.other.dream_world.front_default,

    }))
    console.log(pokemonMap);
    return pokemonMap;
}

const drawPokemons = (pokemons) => {
    console.log(pokemons);
    myDiv$$.innerHTML='';
    for (const pokemon of pokemons) {
        const carta$$ = document.createElement("figure");
        carta$$.classList.add('carta')
    carta$$.innerHTML = `    
        <img src="${pokemon.img}" alt="${pokemon.nombre}">
        <h2>${pokemon.nombre}
            <span>${pokemon.id}</span>
        </h2>
        <div class="pokemon_type">
            <p>Tipo</p><span ></span>${pokemon.tipo}</span>
        </div>
    `;
    myDiv$$.appendChild(carta$$);
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
/* eslint-disable no-undef */
import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import funciones from './data.js';

console.log(example, data);

const POKEMON_API = './data/pokemon/pokemon.json';

const promise = fetch(POKEMON_API);



function mostrandoPoke(poke){
return `
    <div>
    <p>${poke.num}</p>
    <img src="${poke.img}">
    <p>${poke.name}</p>
    </div>
`
}
document.getElementById("imagenes").innerHTML=`
<p>tenemos  ${data.pokemon.length}pokemon</p>
${data.pokemon.map(mostrandoPoke).join('')}`

// // 


// fillWithPokemons(allPokemon);

// // aqui ordenamos de ascendente y descendente

// const allPokemon = window.POKEMON.pokemon;
// let currentPokemon = allPokemon;

// let selectSort = document.getElementById("sort list");
// selectSort.addEventListener("change", () => {
//   let valueSelect = selectSort.value;
//   let pokemonsOrdered = [];
//   if(valueSelect === 'upward'){
//     pokemonsOrdered = window.pokemons.sortData(currentPokemon, 'name', true);
//   }else if(valueSelect === 'falling'){
//     pokemonsOrdered = window.pokemons.sortData(currentPokemon, 'name', false);
//   }else{
//     pokemonsOrdered = currentPokemon;
// }
// fillWithPokemons(pokemonsOrdered);
// });
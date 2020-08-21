/* eslint-disable no-undef */
import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import funciones from './data.js';

console.log(example, data);

import { example,show,filterData,sortData } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);
console.log(data.pokemon.length);
;
//BUSCADOR DE POKEMON
const searchName=()=>{
	const namePoke=document.getElementById("Buscador").value;
	document.getElementById("contenedor-imagenes").innerHTML= filterData(data.pokemon,"name",namePoke);
}
document.getElementById("btn-buscar").addEventListener("click",searchName);
  
//MOSTRAR TODOS LOS POKEMON
const showAll=()=>{
	document.getElementById("contenedor-imagenes").innerHTML=show(data.pokemon);
}
document.getElementById("btn-todo").addEventListener("click",showAll);
//ODERNAR POKEMON
const filterPoke=()=>{
	const typeFilter=document.getElementsByClassName("cmb-ordenamiento").value;
	const newData=JSON.parse(JSON.stringify(data.pokemon));
	document.getElementById("contenedor-imagenes").innerHTML=sortData(newData,"number","upward");
}
document.getElementById("cmb-ordenamiento").addEventListener("change",filterPoke);






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
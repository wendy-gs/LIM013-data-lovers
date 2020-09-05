import {sortData,computeStats} from './data.js';
// import { example,show,filterData,sortData } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import funciones from './data.js';

// console.log(example, data);
// console.log(data.pokemon.length);

// El método slice() devuelve una copia de una parte del array dentro de un nuevo array
let arreglo = data.pokemon.slice();
let containerImg = document.getElementById("contenedor-imagenes");

export const createCard=(pokemon)=>{
  return `
  <div class="ficha-pokemon">
  	<h2> N°${pokemon.num}</h2>
    <div class="ficha-contenido">
			<img src="${pokemon.img}">
			<div class="ficha-boton">
  			<h3> ${pokemon.name}</h3>
         <button>Ficha</button>
			</div>
    </div>
  </div>`
}

const topCard =(pokemon)=>{
  return `
  <div class="ficha-pokemon">
  	<h2> N°${pokemon.num}</h2>
    <div class="ficha-contenido">
			<img src="${pokemon.img}">
			<div class="ficha-boton">
        <h3> ${pokemon.name}</h3>
        <div class="ficha-frecuencia">
         <h4> frecuencia: ${parseFloat(pokemon['spawn-chance'] * 100).toFixed(2)}% </h4>
        </div>
      </div>
    </div>
  </div>`
}
//Función para habrir y cerrar pantallas
//PANTALLA pokemon
const cambio_pokemon=()=>{
  document.getElementById("pantalla_inicio").style.display = "none";
  document.getElementById("pantalla_mejores_movimientos").style.display = "none";
  document.getElementById("pantalla_frecuencia").style.display = "none";
  document.getElementById("pantalla_pokemon").style.display = "block";

  document.getElementById("contenedor-imagenes").innerHTML=(show(data.pokemon));
}
document.getElementById("menu_pokemon").addEventListener("click",cambio_pokemon);

////PANTALLA INICIO A POKEMON
const cambio_pantalla_inicio=()=>{
  document.getElementById("pantalla_inicio").style.display = "block";
  document.getElementById("pantalla_mejores_movimientos").style.display = "none";
  document.getElementById("pantalla_frecuencia").style.display = "none";
  document.getElementById("pantalla_pokemon").style.display = "none";

  //document.getElementById("contenedor-imagenes").innerHTML=(show(data.pokemon));
}
document.getElementById("menu_inicio").addEventListener("click",cambio_pantalla_inicio);


//PANTALLA mejores movimientos//
const cambio_Movimientos=()=>{
  document.getElementById("pantalla_inicio").style.display = "none";
  document.getElementById("pantalla_mejores_movimientos").style.display = "block";
  document.getElementById("pantalla_frecuencia").style.display = "none";
  document.getElementById("pantalla_pokemon").style.display = "none";
  //document.getElementById("contenedor-imagenes").innerHTML=(show(data.pokemon));
}
document.getElementById("menu_movimientos").addEventListener("click",cambio_Movimientos);

//PANTALLA top frecuencia//
const cambio_frecuencia=()=>{
  document.getElementById("pantalla_inicio").style.display = "none";
  document.getElementById("pantalla_mejores_movimientos").style.display = "none";
  document.getElementById("pantalla_frecuencia").style.display = "block";
  document.getElementById("pantalla_pokemon").style.display = "none";
  document.getElementById("imagenes").innerHTML=(top(data.pokemon));
}
document.getElementById("menu_frecuencia").addEventListener("click",cambio_frecuencia);


// El método map() crea un nuevo array con los resultados de la llamada a la función indicada
//aplicados a cada uno de sus elementos./
const show=(data)=>{
  return `${data.map(createCard).join('')}`
}
//El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena
// y devuelve esta cadena.
const top =(data)=>{
  return `${data.map(topCard).join('')}`

}


const orderFrecuencia =()=> {

}

//BUSCADOR DE POKEMON
const searchName=()=>{
	// const namePoke=document.getElementById("Buscador").value;
	// document.getElementById("contenedor-imagenes").innerHTML= filterData(data.pokemon,"name",namePoke);
}
document.getElementById("btn-buscar").addEventListener("click",searchName);

//MOSTRAR TODOS LOS POKEMON
const showAll=()=>{
	containerImg.innerHTML=show(data.pokemon);
}
document.getElementById("btn-todo").addEventListener("click",showAll);


// ORDENAR POKEMON//

const orderPoke =()=> {
  let valor = filterPoke.value;
  const newData = arreglo.slice();
  containerImg.innerHTML = sortData(newData,valor);
}
const filterPoke = document.getElementById("cmb-ordenamiento");
filterPoke.addEventListener("change", orderPoke);


// Cada ves que usuario cambie(change) de opcion//
const filterFrecuencia = document.getElementById("spawnChance");
filterFrecuencia.addEventListener("change",orderFrecuencia);
//
const spawnChance = document.getElementById('top_frecuencia');
spawnChance.addEventListener('change',(e) => {
  const spawn = e.target.value;
  // console.log(spawn);
  //retorna en la card
  document.getElementById("imagenes").innerHTML=top(computeStats(data.pokemon, spawn));
})


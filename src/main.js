import { example,show,filterData,sortData } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import funciones from './data.js';

console.log(example, data);
console.log(data.pokemon.length);

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



//************** 22/08/20 ***************** */
// Cada ves que usuario cambie(change) de opcion//
const filterPoke = document.getElementById("cmb-ordenamiento");
filterPoke.addEventListener("change", () => {
    let valor = filterPoke.value;
	//Se crea variable que tendra los pokemon ordenados y esta variable sera llamada como resultado de la condicional //
	let Orderpokemons = [];
	// Si usuario seleciona a-z se ordenara de manera ascendente//
	if(valor === 'A-Z'){
		Orderpokemons = sortData(data.pokemon, 'name', true);
		//Si no, si usuario seleciona z-a ordenara de manera descendente //
		}else if(valor === 'Z-A'){
			Orderpokemons = sortData(data.pokemon, 'name', false);
			}else if(valor === '1-251'){
				Orderpokemons = sortData(data.pokemon, 'num', true);
				}else if(valor === '251-1'){
					Orderpokemons = sortData(data.pokemon, 'num', false);
					}else{
						Orderpokemons = data.pokemon;
					}
					fillWithPokemons(Orderpokemons);
				});

let fillWithPokemons = (pokemons) => {
    document.getElementById("contenedor-imagenes").innerHTML = "";
    for (let i = 0; i < pokemons.length; i++){
        document.getElementById("contenedor-imagenes").innerHTML += createCard(pokemons[i]);
    }
}

const createCard=(pokemon)=>{
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

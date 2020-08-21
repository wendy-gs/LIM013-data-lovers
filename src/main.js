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
import {sortData,filterData} from './data.js';
// import { example,show,filterData,sortData } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import funciones from './data.js';

// console.log(example, data);
// console.log(data.pokemon.length);

// El método slice() devuelve una copia de una parte del array dentro de un nuevo array
let arreglo = data.pokemon.slice();//creamos el arreglo temporal que se ira modificando segun los filtros


//-----------------FUNCIONES QUE SE USARAN PARA CREAR LOS DATOS DE LAS FICHAS POKEMON  Y LA VENTAN MODAL-----------------------------

//CREAMOS LOS TIPOS DE CADA POKEMON CON SUS CLASES PARA DARLE COLOR POR TIPO

const typePokemon = (data)=>{ //Recordar que esta data es primero pasado por un map
let arrayTipo =" ";
for(let i=0; i<data.type.length;i++){
  arrayTipo +=` <span class="type-${data.type[i]}">${data.type[i]}</span>&nbsp`;
}
return arrayTipo;
}

// CREAMOS LAS FORTALEZAS DE LOS POKEMON CON SUS CLASES PARA DARLE COLOR//

const resitantPokemon = (data)=>{
  let arrayResistencia ="";
  for(let i=0; i<data.resistant.length;i++){
    // &nbsp
    arrayResistencia+=`<span class="type-${data.resistant[i]}">${data.resistant[i]}</span>&nbsp`;
  }
  return arrayResistencia;
  }
//CREAMOS LAS DEBILIDADES DE LOS POKEMON CON SUS CLASES PARA DARLE COLOR
  const weaknessesPokemon = (data)=>{
    let arrayDebilidad ="";
    for(let i=0; i<data.weaknesses.length;i++){
      arrayDebilidad+=` <span class="type-${data.weaknesses[i]}">${data.weaknesses[i]}</span>&nbsp`;
    }
    return arrayDebilidad;
    }
   //CREAMOS LAS EVOLUCIONES POR CADA POKEMON
    const evolution=(pok)=>{
      const array =filterData(data.pokemon,"caramelo",pok.evolution.candy);
      let evolucion ="";
      for (let i=0; i<array.length;i++){
        // ojo agrege img
        evolucion+=`<div class="item-evoluccion"><p>${array[i].name}</p><img class="img-evolucion"src="${array[i].img}"</div>`;
      }
      return evolucion;
    }

   //FUNCION PRUEBA ATAQUE ESPECIAL
    const attack=(pok)=>{
      const array =pok ["special-attack"];
      let ataque="";
      for(let i=0; i<array.length;i++){
        ataque+=`<span class ="ataque" >${array[i].name}</span>`
      }
      return ataque;

    }
//FUNCION QUE CREA LOS DATOS EN LA VENTANA MODAL
const createModal=(pokemon)=>{
	return `
	<p class="close-modal">X</p>
	<div class="modal-encabezado">
		<h1 > N°${pokemon.num}</h1>
		<h2> ${pokemon.name.toUpperCase()}</h2>
		<h3>Tipo: ${typePokemon(pokemon)}</h3>
	</div>
	<div class="modal-seccion">
		<div class="peso-altura seccion-item">
			<table class="tabla-pesoAltura">
			<tr>
				<th>Altura</th>
			</tr>
			<tr>
				<td>${pokemon.size.height}</td>
			</tr>
			</table>
			<table class="tabla-pesoAltura">
			<tr>
				<th>Peso</th>
			</tr>
			<tr>
				<td>${pokemon.size.weight}</td>
			</tr>
			</table>
		</div>
		<div class="seccion-imagen seccion-item">
			<img class="item-imagen" src="${pokemon.img}">
			<p>${pokemon.about}</</p>
		</div>
		<div class="Debilidad-Fortaleza seccion-item">
			<table class="tabla-debilidadFortaleza">
			<tr>
				<th>Fortalezas</th>
			</tr>
			<tr>
				<td class="filaDebilidad">${resitantPokemon(pokemon)}</td>
			</tr>
		</table>
		<table class="tabla-debilidadFortaleza">
			<tr>
				<th>Debilidades</th>
			</tr>
			<tr>
				<td class="filaDebilidad">${weaknessesPokemon(pokemon)}</td>
			</tr>
		</table>
		</div>
	</div>
	<div class="modal-footer">
		<div class="footer-puntos item-footer">
			<table class="tabla-puntos">
				<caption><strong>PUNTOS BASE</strong></caption>
			<tr>
		 		<th>Ataque</th>
	  		 	<td>${pokemon.stats["base-attack"]}</td>
			</tr>
			<tr>
		 		<th>Defensa</th>
	  		 	<td>${pokemon.stats["base-defense"]}</td>
			</tr>
			<tr>
		 		<th>Maximo CP</th>
	  		 	<td>${pokemon.stats["max-cp"]}</td>
			</tr>
			<tr>
		 		<th>Ataque Especial</th>
	  		 	<td>${attack(pokemon)}</td>
			</tr>
	  
	  		</table>
		</div>
		<div class="footer-evoluciones item-footer">
		<h3>EVOLUCIONES</h3>
		<div class="contenedor-evoluciones">${evolution(pokemon)}</div>
	</div>
	`
}


//------------------FUNCIONES QUE SE USARAN PARA CREAR LOS DATOS DE LA FICHA POKEMON------------

const createCard=(pokemon)=>{
  return `
  <div class="ficha-pokemon">
    <h1 > N°${pokemon.num}</h1>
    <h2> ${pokemon.name}</h2>
    <div class="ficha-contenido">
			<img src="${pokemon.img}">
			<div class="ficha-boton">
        <h3><strong>Generación: </strong> ${pokemon.generation.name}</h3>
        <h3><strong>Huevo: </strong> ${pokemon.egg}</h3>
        <h3> ${typePokemon(pokemon)}</h3>
      </div>
    </div>
    <button class="btn-modal" id="${pokemon.name}">Ver Ficha</button>
  </div>`
};

//FUNCION QUE MOSTRARA LA VENTANA MODAL CON DATOS
const showModal=(data)=>{
	return `${data.map(createModal).join('')}`
}

//FUNCION QUE MOSTRARA LAS CARD CREADAS
const show=(data)=>{
  return `${data.map(createCard).join('')}`
}
// const showModal=(data)=>{
//   return `${data.map(createModal).join('')}`
// }

//CREAMOS LA FUNCION QUE ABRIRA LA VENTANA MODAL AL HACER CLICK EN VER FICHA POKEMON

const fillModal=(boton)=>{
	boton.addEventListener("click",function(evt){
		const pokemon=evt.target.id;
		let modal=document.getElementById("modal");
		let cmodal=document.getElementById("ctn-modal");
		cmodal.style.visibility="visible";
		modal.classList.remove("modal-close");
		modal.innerHTML=showModal(filterData(data.pokemon,"name",pokemon));
		let close=document.querySelectorAll(".close-modal")[0];
		close.addEventListener("click",function(){
			modal.classList.add("modal-close");
			setTimeout(function(){
				cmodal.style.visibility="hidden";
			},900)
  })
  window.addEventListener("click",function(e){
    if(e.target==cmodal){
    modal.classList.add("modal-close");
    setTimeout(function(){
      cmodal.style.visibility="hidden";
    },900)
  }
  })
});
}
//============================================PESTAÑA INICIO========================================================================
const showInicio =()=>{
  //OCULTAMOS ELEMENTOS DE OTRA PAGINA
  //mostramos elementos
  hojaPokemon.classList.add("ocultarElemento");
  hojaMovimientos.classList.add("ocultarElemento");
  hojaEstadistica.classList.add("ocultarElemento");
  pantalla_inicio.classList.remove("ocultarElemento");
}

//VARIABLES UNIVERSALES PARA TRAER DEL DOM
let pantalla_inicio=document.getElementById("pantalla_inicio");
document.getElementById("menu_inicio").addEventListener("click", showInicio);



//============================================PESTAÑA POKEMON========================================================================
//VARIABLES UNIVERSALES PARA TRAER DEL DOM
let hojaPokemon = document.querySelectorAll(".hoja-pokemon")[0];
let hojaMovimientos = document.querySelectorAll(".hoja-movimientos")[0];
let hojaEstadistica= document.querySelectorAll(".hoja-estadistico")[0];


// let cbuscador = document.querySelectorAll(".contenedor-buscador")[0];
// let cfiltro = document.querySelectorAll(".contenedor-filtros")[0];
// let cordenamiento = document.querySelectorAll(".contenedor-ordenamiento")[0];

let containerImg = document.getElementById("contenedor-imagenes");


let title = document.getElementById("titulo-pokemon");
let typeGeneration = document.querySelectorAll("div.filtro>a.generation");
// let typeEgg = document.querySelectorAll("div.filtro>a.huevo");
let filtroGeneracion = document.getElementById("filtro-generacion");
let filtroHuevo = document.getElementById("filtro-huevo");
let filtroTipo = document.getElementById("filtro-tipo");
let butonFichas = "";

// ------------------------------Funcion QUE MUESTRA LOS POKEMON---------------------------------------------------
const showAll=()=>{
  arreglo=data.pokemon.slice();
  containerImg.innerHTML=show(arreglo);
  title.innerText=` se muestran ${arreglo.length}  pokemon`
  //le damos el evento click al boton ver ficha
butonFichas=document.querySelectorAll("button.btn-modal");
butonFichas.forEach(fillModal);
}
document.getElementById("btn-todo").addEventListener("click",showAll);

//------------------------FUNCION DE BUSQUEDA POR NOMBRE POKEMON-----
const searchLetter =()=>{
  const letter = document.getElementById("itBusqueda").value;
  const array = filterData(data.pokemon,"letra",letter);
  if(array.length!=0){
    containerImg.innerHTML=show(array);
    //le damos el evento click al boton ver fichas para ver el modal
    butonFichas=document.querySelectorAll("button.btn-modal");
    butonFichas.forEach(fillModal);
  }else{
    containerImg.innerHTML= "no se encontro pokemon";
  }
}


document.getElementById("itBusqueda").addEventListener("keyup",searchLetter);

//------------------------CREACION DE LOS de los 18 botones de tipo pokemon---------------------
//creamos un array donde estaran los 18 tipos de pokemon

let arrayTypes = data.pokemon.map(function(poke){
  return poke.type;
});
// 
arrayTypes =((arrayTypes.join(' ')).replace(/,/g,' ')).split(' ');
let newArrayTypes =arrayTypes.filter((el,index)=>arrayTypes.indexOf(el)===index);//filtramos solo los tipos diferentes

//CREAMOS LOS BOTONES DE TIPO POKEMON-
let types ="";
for(let i=0;i<newArrayTypes.length;i++){
  types+=` <a href="#" name="${newArrayTypes[i]}" class="tipo">${newArrayTypes}/a><br>`;

}
//----------------se daran los todos los eventos a los filtros--------------

//funcion que filtrara y mostrara los pokemon segun los filtros (tipo,genracion y huevo)------------4
const filtrado= (boton)=>{
  boton.addEventListener("click" ,function(evt){
    const hijo=evt.target.name
  const tipoFiltro=evt.target.className;
  arreglo=filterData(data.pokemon,tipoFiltro,hijo);
  containerImg.innerHTML=show(arreglo);
  document.getElementById(`filtro-${(tipoFiltro)}`).classList.remove("mostrarElemento");
  title.innerText=`Se muestra ${arreglo.length} pokemon`;
  //le damos el evento click al boton ver fichas para ver el modal
  butonFichas=document.querySelectorAll("button.btn-modal");
  butonFichas.forEach(fillModal);
  });

}
// funcion que llenara los filtros con sus respectivos botones
const llenado =(e)=>{
  switch(e.target.name){
    case "tipo":{
      filtroTipo.innerHTML=`${types}`;
      filtroTipo.classList.add("mostrarElemento");
      let typeSon=document.querySelectorAll("div.filtro>a.tipo");//capturamos a cada elemento a-tipo que estadentro  div filtro para darle un evento
      typeSon.forEach(filtrado);
      break;
    }
      case "generacion":
        filtroGeneracion.classList.add("mostrarElemento");
        typeGeneration.foreach(filtrado);
        break;
        case "huevo":
        filtroHuevo.classList.add("mostrarElemento");
        break;

  }

}

document.getElementById("generacion").addEventListener("click",llenado);
document.getElementById("huevo").addEventListener("click",llenado);
document.getElementById("tipo").addEventListener("click",llenado);

//--------------------------funcion de orden de pokemon--------------------------
const orderPoke=()=>{
  const typeFilter= document.getElementById("cmb-ordenamiento").value;
  const newData =arreglo.slice();//Para el ordenamiento se manda el arreglo temporal para que lo ordene
  containerImg.innerHTML=show(sortData(newData,typeFilter));
  butonFichas=document.querySelectorAll("button.btn-modal");
  butonFichas.forEach(fillModal);
}
document.getElementById("cmb-ordenamiento").addEventListener("change",orderPoke);


//-----------------------FUNCION QUE ABRE NUESTRA PAGINA POKEMON-----------------------------------
const showSheetpokemon =()=>{
  //OCULTAMOS ELEMENTOS DE OTRAS PAGINAS
  pantalla_inicio.classList.add("ocultarElemento");
  // hEstadistico.innerHTML="";

  //MOSTRAMOS ELEMENTOS
hojaPokemon.classList.remove("ocultarElemento");
// cfiltro.classList.remove("ocultarElemento");
// cordenamiento.classList.remove("ocultarElemento");
showAll(data.pokemon);
}
document.getElementById("menu_pokemon").addEventListener("click",showSheetpokemon);










// const topCard =(pokemon)=>{
//   return `
//   <div class="ficha-pokemon">
//   	<h2> N°${pokemon.num}</h2>
//     <div class="ficha-contenido">
// 			<img src="${pokemon.img}">
// 			<div class="ficha-boton">
//         <h3> ${pokemon.name}</h3>
//         <div class="ficha-frecuencia">
//          <h4> frecuencia: ${parseFloat(pokemon['spawn-chance'] * 100).toFixed(2)}% </h4>
//         </div>
//       </div>
//     </div>
//   </div>`
// }

// ------pantalla inicio---------
//Función para habrir y cerrar pantallas
//PANTALLA pokemon
// let pantalla_inicio=document.getElementById("pantalla_inicio");
// const cambio_pokemon=()=>{
//   document.getElementById("pantalla_inicio").style.display = "none";
//   document.getElementById("pantalla_mejores_movimientos").style.display = "none";
//   document.getElementById("pantalla_frecuencia").style.display = "none";
//   document.getElementById("pantalla_pokemon").style.display = "block";

//   document.getElementById("contenedor-imagenes").innerHTML=(show(data.pokemon));
// }
// document.getElementById("menu_pokemon").addEventListener("click",cambio_pokemon);

// ////PANTALLA INICIO A POKEMON
// const cambio_pantalla_inicio=()=>{
//   document.getElementById("pantalla_inicio").style.display = "block";
//   document.getElementById("pantalla_mejores_movimientos").style.display = "none";
//   document.getElementById("pantalla_frecuencia").style.display = "none";
//   document.getElementById("pantalla_pokemon").style.display = "none";

//   //document.getElementById("contenedor-imagenes").innerHTML=(show(data.pokemon));
// }
// document.getElementById("menu_inicio").addEventListener("click",cambio_pantalla_inicio);


// //PANTALLA mejores movimientos//
// const cambio_Movimientos=()=>{
//   document.getElementById("pantalla_inicio").style.display = "none";
//   document.getElementById("pantalla_mejores_movimientos").style.display = "block";
//   document.getElementById("pantalla_frecuencia").style.display = "none";
//   document.getElementById("pantalla_pokemon").style.display = "none";
//   //document.getElementById("contenedor-imagenes").innerHTML=(show(data.pokemon));
// }
// document.getElementById("menu_movimientos").addEventListener("click",cambio_Movimientos);

// //PANTALLA top frecuencia//
// const cambio_frecuencia=()=>{
//   document.getElementById("pantalla_inicio").style.display = "none";
//   document.getElementById("pantalla_mejores_movimientos").style.display = "none";
//   document.getElementById("pantalla_frecuencia").style.display = "block";
//   document.getElementById("pantalla_pokemon").style.display = "none";
//   document.getElementById("imagenes").innerHTML=(top(data.pokemon));
// }
// document.getElementById("menu_frecuencia").addEventListener("click",cambio_frecuencia);


// El método map() crea un nuevo array con los resultados de la llamada a la función indicada
//aplicados a cada uno de sus elementos./

//El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena
// y devuelve esta cadena.
// const top =(data)=>{
//   return `${data.map(topCard).join('')}`

// }


// const orderFrecuencia =()=> {

// }

// //BUSCADOR DE POKEMON






// // ORDENAR POKEMON//

// const orderPoke =()=> {
//   let valor = filterPoke.value;
//   const newData = arreglo.slice();
//   containerImg.innerHTML = sortData(newData,valor);
// }
// const filterPoke = document.getElementById("cmb-ordenamiento");
// filterPoke.addEventListener("change", orderPoke);

// / Frecuencia
// Cada ves que usuario cambie(change) de opcion//
// const filterFrecuencia = document.getElementById("spawnChance");
// filterFrecuencia.addEventListener("change",orderFrecuencia);
// //
// const spawnChance = document.getElementById('top_frecuencia');
// spawnChance.addEventListener('change',(e) => {
//   const spawn = e.target.value;
//   // console.log(spawn);
//   //retorna en la card
//   document.getElementById("imagenes").innerHTML=top(computeStats(data.pokemon, spawn));
// }
import {filterData,sortData,computeStats} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import funciones from './data.js';

let arreglo=data.pokemon.slice();//creamos el arreglo temporal que se ira modificando segun los filtros

//-----------------FUNCIONES QUE SE USARAN PARA CREAR LOS DATOS DE LAS FICHAS POKEMON  Y LA VENTANA MODAL-----------------------------

//CREAMOS LOS TIPOS DE CADA POKEMON CON SUS CLASES PARA DARLE COLOR POR TIPO
const typePokemon=(data)=>{//Recordar que esta data es primero pasado por un map
	let arrayTipo="";
	for(let i=0;i<data.type.length;i++){
		arrayTipo+=`<span class="type-${data.type[i]}">${data.type[i]}</span>&nbsp`;
	}
	return arrayTipo;
}
//CREAMOS LAS FORTALEZAS DE LOS POKEMON CON SUS CLASES PARA DARLE COLOR
const resitantPokemon=(data)=>{
	let arrayResistencia="";
	for(let i=0;i<data.resistant.length;i++){
		arrayResistencia+=`<span class="type-${data.resistant[i]}">${data.resistant[i]}</span>&nbsp`;
	}
	return arrayResistencia;
}
//CREAMOS LAS DEBILIDADES DE LOS POKEMON CON SUS CLASES PARA DARLE COLOR
const weaknessesPokemon=(data)=>{
	let arrayDebilidad="";
	for(let i=0;i<data.weaknesses.length;i++){
		arrayDebilidad+=`<span class="type-${data.weaknesses[i]}">${data.weaknesses[i]}</span>&nbsp`;
	}
	return arrayDebilidad;
}
//CREMOAS LAS EVOLUCIONES POR CADA POKEMON
const evolution=(pok)=>{
	const array=filterData(data.pokemon,"caramelo",pok.evolution.candy);
	let evolucion="";
	for(let i=0;i<array.length;i++){
		evolucion+=`<div class="item-evolucion"><p>${array[i].name}</p><img class="img-evolucion" src="${array[i].img}"></div>`
	}
	return evolucion;
}
//FUNCION PRUEBA ATAQUE ESPECIAL
const attack=(pok)=>{
	const array=pok["special-attack"];
	let ataque="";
	for(let i=0;i<array.length;i++){
		ataque+=`<span class="ataque">${array[i].name}</span><br>`
	}
	return ataque;
}
//FUNCION QUE CREA LOS DATOS EN LA VENTANA MODAL PARA CELULAR
const creatreModalCelular=(pokemon)=>{
	return `
	<p class="close-modal">X</p>
	<div class="modal-encabezado-celular">
		<h2> ${pokemon.name.toUpperCase()}</h2>
		<h3>Tipo: ${typePokemon(pokemon)}</h3>
	</div>
	<div class="modal-seccion-celular">
		<div class="seccion-imagen seccion-item">
			<img class="item-imagen" src="${pokemon.img}">
		</div>		
	</div>	
	<div class="modal-footer-celular">
		<div class="footer-puntos-celular">
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
	</div>
	`
}

//FUNCION QUE CREA LOS DATOS EN LA VENTANA MODAL PARA ESCRITORIO
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
		<div class=contenedor-evoluciones>
		${evolution(pokemon)}
		</div>
	</div>
	`
}
//FUNCION QUE CREA LOS DATOS CARDS DE POKEMON;
const createCard=(pokemon)=>{
  return `
  <div class="ficha-pokemon">
    <h1 > N°${pokemon.num}</h1>
    <h2> ${pokemon.name}</h2>
		<div class="ficha-contenido">
			<div class="ficha-imagen">
				<img id="img-ficha-pokemon" src="${pokemon.img}">
			</div>
			<div class="ficha-boton">
        <h3><strong>Generación: </strong> ${pokemon.generation.name}</h3>
				<h3><strong>Huevo: </strong> ${pokemon.egg}</h3>
				<h3> frecuencia: ${parseFloat(pokemon['spawn-chance'] * 100).toFixed(2)}% </h3>
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
//FUNCION QUE MOSTRARA LA VENTANA MODAL EN CELULAR Y TABLET
const showModalCelular=(data)=>{
	return `${data.map(creatreModalCelular).join('')}`
}
//FUNCION QUE MOSTRARA LAS CARD CREADAS
const show=(data)=>{
  return `${data.map(createCard).join('')}`
};
//CREAMOS LA FUNCION QUE ABRIRA LA VENTANA MODAL AL HACER CLICK EN VER FICHA POKEMON
const fillModal=(boton)=>{
	boton.addEventListener("click",function(evt){
		//prueba de capturar ancho de la pantalla
		const ancho=screen.width;
		const pokemon=evt.target.id;
		let modal=document.getElementById("modal");
		let cmodal=document.getElementById("ctn-modal");
		cmodal.style.visibility="visible";
		modal.classList.remove("modal-close");
		if(ancho<760){
			modal.innerHTML=showModalCelular(filterData(data.pokemon,"name",pokemon));
		}else{
		modal.innerHTML=showModal(filterData(data.pokemon,"name",pokemon));
		}

		let close=document.querySelectorAll(".close-modal")[0];
		close.addEventListener("click",function(e){
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
//VARIABLES UNIVERSALES PARA TRAER DEL DOM
let pantalla_inicio=document.getElementById("pantalla_inicio");
const showInicio=()=>{
	//OCULTAMOS ELEMENTOS DE OTRAS PAGINAS
	hojaPokemon.classList.add("ocultarElemento");	
	hojaMovimiento.classList.add("ocultarElemento");
	hojaEstadistico.classList.add("ocultarElemento");
	//MOSTRAMOS ELEMENTOS
	pantalla_inicio.classList.remove("ocultarElemento")
}
document.getElementById("menu_inicio").addEventListener("click",showInicio)

//============================================PESTAÑA POKEMON========================================================================
//VARIABLES UNIVERSALES PARA TRAER DEL DOM
let hojaPokemon=document.querySelectorAll(".hoja-pokemon")[0];
let containerImg=document.getElementById("contenedor-imagenes");
let title=document.getElementById("titulo-pokemon");
let typeGeneration=document.querySelectorAll("div.filtro > a.generacion");
let typeEgg=document.querySelectorAll("div.filtro > a.huevo");
let typeAparicion=document.querySelectorAll("div.filtro > a.aparicion");
let filtroGeneracion=document.getElementById("filtro-generacion");
let filtroHuevo=document.getElementById("filtro-huevo");
let filtroTipo=document.getElementById("filtro-tipo");
let filtroAparicion=document.getElementById("filtro-aparicion");


let butonFichas="";
//-----------------------------FUNCION QUE MUESTRA TODOS LOS POKEMON -----------------------------------
const showAll=()=>{
	arreglo=data.pokemon.slice();
	containerImg.innerHTML=show(arreglo);
	title.innerText=`Se muestran ${arreglo.length} pokémon`;
	//Le damos el evento click al boton ver ficha
	butonFichas=document.querySelectorAll("button.btn-modal");
	butonFichas.forEach(fillModal);
}
document.getElementById("btn-todo").addEventListener("click",showAll);

//-----------------------------FUNCION DE BUSQUEDA POR NOMBRE POKEMON -----------------------------------
const searchLetter=()=>{
	const letter=document.getElementById("itBusqueda").value;
	const array=filterData(data.pokemon,"letra",letter);
	if(array.length!=0){
		containerImg.innerHTML=show(array);
		//Le damos el evento click al boton ver ficha
		butonFichas=document.querySelectorAll("button.btn-modal");
		butonFichas.forEach(fillModal);
	}else{
		containerImg.innerHTML="No se encontro pokemon";
	}
}
document.getElementById("itBusqueda").addEventListener("keyup",searchLetter)

//-------------------------CREACION DE LOS 18 BOTONES DE TIPO POKEMON  --------------------------------------------
//Creamos un array donde estaran los 18 tipo de pokemon
let arrayTypes=data.pokemon.map(function(poke){
	return	poke.type;
});
arrayTypes=((arrayTypes.join(' ')).replace(/,/g,' ')).split(' ');//
let newArrayTypes=arrayTypes.filter((el,index)=>arrayTypes.indexOf(el)===index);//filtramos solo los tipos diferentes
//Creamos los botones de  tipo pokemon
let types='';
for(let i=0;i<newArrayTypes.length;i++){
	types+=`<a href="#" name="${newArrayTypes[i]}" class="tipo">${newArrayTypes[i]}</a><br>`;
}

//-------------------------SE DARAN LOS EVENTOS CLICK A TODOS LOS FILTROS --------------------------------------------
//Funcion que filtrara y mostrara los pokemon segun filtro(tipo,genracion,huevo y aparicion)
const filtrado=(boton)=>{
	boton.addEventListener("click", function(evt){
	const hijo = evt.target.name;
	console.log(hijo);
	const tipoFiltro=evt.target.className;
	console.log(tipoFiltro);
	arreglo=filterData(data.pokemon,tipoFiltro,hijo);//guardo en mi array temporal la nueva data a mostrarse}
	if(tipoFiltro==="aparicion"){
		const dataAparicion=sortData(arreglo,"Aparicion");
		containerImg.innerHTML=show(dataAparicion);
	}else{
	containerImg.innerHTML=show(arreglo);
	}
	document.getElementById(`filtro-${tipoFiltro}`).classList.remove("mostrarElemento");
	title.innerText=`Se muestran ${arreglo.length} pokémon`;
	//Le damos el evento click para que aparezca la ventana modal
	butonFichas=document.querySelectorAll("button.btn-modal");
	butonFichas.forEach(fillModal);
});
}
//Funcion que llenara los filtros con sus respectivos botones
const llenado=(e)=>{
	switch(e.target.name) {
		case "tipo":{
			filtroTipo.innerHTML=`${types}`;
			filtroTipo.classList.add("mostrarElemento");
			let typeSon=document.querySelectorAll("div.filtro > a.tipo");//capturamos a cada elemenot a-tipo que estadentro  div filtro para darle un evento
			typeSon.forEach(filtrado);
			break;}
		case "generacion":
			filtroGeneracion.classList.add("mostrarElemento");
			typeGeneration.forEach(filtrado);
			break;
		case "huevo":
			filtroHuevo.classList.add("mostrarElemento");
			typeEgg.forEach(filtrado);
			break;
		case "aparicion":
			filtroAparicion.classList.add("mostrarElemento");
			typeAparicion.forEach(filtrado);
			break;	
	}
}
document.getElementById("tipo").addEventListener("click",llenado);
document.getElementById("generacion").addEventListener("click",llenado);
document.getElementById("huevo").addEventListener("click",llenado);
document.getElementById("aparicion").addEventListener("click",llenado);


//-------------------------FUNCION DE ORDEN DE POKEMON --------------------------------------------
const orderPoke=()=>{
	const typeFilter=document.getElementById("cmb-ordenamiento").value;
	const newData=arreglo.slice();//Para el ordenamiento se manda el arreglo temporal para que lo ordene
	containerImg.innerHTML=show(sortData(newData,typeFilter));
	butonFichas=document.querySelectorAll("button.btn-modal");
	butonFichas.forEach(fillModal);
}
document.getElementById("cmb-ordenamiento").addEventListener("change",orderPoke);


//---------------------FUNCION QUE ABRE NUESTRA PAGINA POKEMON--------------------------------
const showSheetPokemon=()=>{
	//OCULTAMOS ELEMENTOS DE OTRAS PAGINAS
	pantalla_inicio.classList.add("ocultarElemento");
	hojaMovimiento.classList.add("ocultarElemento");
	hojaEstadistico.classList.add("ocultarElemento");
	//MOSTRAMOS ELEMENTOS
	hojaPokemon.classList.remove("ocultarElemento");
	showAll(data.pokemon);

	

}
document.getElementById("pestañaPokemon").addEventListener("click",showSheetPokemon);

//===========================PESTAÑA MEJORES MOVIMIENTOS ===================================================================
//VARIBALES UNIVERSALES PARA TRAER DEL DOM
let hojaMovimiento=document.querySelectorAll(".hoja-movimientos")[0];
let hMovimientos=document.querySelectorAll(".header-movimiento")[0];
let sMovimientos=document.querySelectorAll(".section-movimiento")[0];
let fMovimientos=document.querySelectorAll(".footer-movimiento")[0];

//FUNCION QUE GRAFICA LA PESTAÑA ESTADISTICA POKEMON
const showMovimientos=()=>{
//OCULTANDO ELEMENTOS DE OTRAS PAGINAS
hojaPokemon.classList.add("ocultarElemento");
pantalla_inicio.classList.add("ocultarElemento");
hojaEstadistico.classList.add("ocultarElemento");
//MOSTRAMOS ELEMENTOS
hojaMovimiento.classList.remove("ocultarElemento");
hMovimientos.innerHTML=`<h1>BATALLA POKÉMON</h1><div class="img-batalla"><img id="batalla" src="/imagenes/batalla2.JPG"></div>`
sMovimientos.innerHTML=`<div class="itemS-movimiento"><label for="Name1">Pokemon 1:</label>
<input type="text" id="Name1" name="Name1"/></div><div class="itemS-movimiento"><label for="Name2">Pokemon 2:</label>
<input type="text" id="Name2" name="Name2"/></div><div class="itemS-movimiento"><button id="btnCombatir">COMPARAR</button></div>`

//FUNCION QUE TRAE LOS DATOS DE LOS POKEMON A BATALLAR
const showCombate=()=>{
	const pokemon1=document.getElementById("Name1").value;
	const pokemon2=document.getElementById("Name2").value;
	const datepoke1=filterData(data.pokemon,"name",pokemon1);
	console.log(datepoke1);
	const datepoke2=filterData(data.pokemon,"name",pokemon2);
	fMovimientos.innerHTML=`<div class="cBatalla"><div class="cImg"><h1>${datepoke1[0].name}</h1><img id="bPoke1" src="${datepoke1[0].img}"></div><div class="cDatos1"></div></div>
	<div class="cBatalla"><div class="cImg"><h1>${datepoke2[0].name}</h1><img id="bPoke2" src="${datepoke2[0].img}"></div><div class="cDatos2"></div></div>`
}
document.getElementById("btnCombatir").addEventListener("click",showCombate);
}
document.getElementById("pestañaMovimientos").addEventListener("click",showMovimientos);

//=========================== PESTAÑA ESTADISTICA POKEMON ==================================================================
//VARIBALES UNIVERSALES PARA TRAER DEL DOM
let hojaEstadistico=document.querySelector(".hoja-estadistico");
let hEstadistico=document.querySelectorAll(".header-estadistico")[0];
let sCalculo=document.querySelectorAll(".resultadoCalculo")[0];
let nEstadistico=document.querySelectorAll(".nav-estadistico")[0];

//FUNCION QUE TRAE EL ARRAY CON CANTDAD DE POKEMON POR TIPO
const funcionTypes=(data,tipos)=>{
  let totalTipos=[];
  for(let i=0;i<tipos.length;i++){
    totalTipos.push(filterData(data,"tipo",tipos[i]).length);
  }
  return totalTipos;
}
let variable=funcionTypes(data.pokemon,newArrayTypes);

//FUNCION QUE GRAFICA LA PESTAÑA ESTADISTICA POKEMON
const showEstadistica=()=>{
	//Quitamos todo los elementos de otras hojas
	hojaPokemon.classList.add("ocultarElemento");
	pantalla_inicio.classList.add("ocultarElemento");
	hojaMovimiento.classList.add("ocultarElemento");

	//Llena el header de estadistica
	hojaEstadistico.classList.remove("ocultarElemento");
	//sEstadistico.classList.remove("ocultarElemento")
	hEstadistico.innerHTML=`<div class="img-pikachu"><img id="pokemon" src="/imagenes/pika.GIF"></div>&nbsp<h1>CÁLCULO POR TIPO DE POKÉMON</h1>`
	//Llena la barra de tipos de pokemon
	nEstadistico.innerHTML=types;
	//Llena la grafica
	let conteinerChart=document.getElementById("myChart").getContext("2d");
	let myChart=new Chart(conteinerChart,{
		type:"horizontalBar",
		data:{
		labels:newArrayTypes,
		datasets:[{
			label:"Num datos",
			data:variable,
			backgroundColor:[
				"#46CC41",
				"#B8A965",
				"#9C6AA6",
				"#E9AA4F",
				"#BB97DD",
				"#36A8F8",
				"#B8CE13",
				"#FFCA06",
				"#A87A07",
				"#F20F05",
				"#F8108A",
				"#949491",
				"#04CABC",
				"#7F61A1",
				"#903BF0;",
				"#F34EA8",
				"#7A0344",
				"#597C96"]
		}]
	},
})
	//FUNCION QUE TRAE EL CALCULO POR TIPO  POKEMON
let typeSon=document.querySelectorAll("div.nav-estadistico> a.tipo");//capturamos a cada elemenot a-tipo que estadentro  div filtro para darle un evento
	typeSon.forEach((unHijo)=>{
		unHijo.addEventListener("click", function(evt){
			const hijo = evt.target.name;
			const arreglo=computeStats(data.pokemon,hijo);
			sCalculo.innerHTML=`<h2 class="type-${hijo}">POKÉMON TIPO ${hijo.toUpperCase()}</h2><h3><span>${arreglo[0]}</span> pokémon en total</h3>&nbsp<h3><span>${arreglo[1]}%</span>del total de pokémon</h3>`
		});
	})
}
document.getElementById("estadistica").addEventListener("click",showEstadistica);

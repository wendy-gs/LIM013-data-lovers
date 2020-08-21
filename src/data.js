// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
// Funcion que crea las  tarjetas
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
//Funcion que muestra los pokemon
export const show=(data)=>{
  return `${data.map(createCard).join('')}`
  
}
//Funcion que filtra
export const filterData=(data,type,condicion)=>{
  switch(type){
    case "name":
      const resultado=data.filter(poke=>poke.name===condicion);
      return `${resultado.map(createCard)}`
      break;
  }
}
//funcion ordenamiento numerico
const compare=(a,b)=>{
  if(a.name>b.name){
    return 1;
  }
  if(a.name<b.name){
    return -1
  }
  return 0;
}
//Funcion que ordena
export const sortData=(data,sortBy,sortOrder)=>{
  switch(sortBy){
    case "number":
      if(sortOrder==="upward"){
        data.sort(compare);
        return `${data.map(createCard)}`
        break;
      }else{
        return "hola"
      }
  }

}
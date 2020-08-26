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


//******************** 22/08/20  ******************** */
//Funcion que ordena ascendente
// Creo una función sorData y se da tres parametros (data,ordenar por,orden de clasificación)
    export const sortData= (data, sortBy, sortOrder) => {
      switch(sortBy) {
        case 'name':
      // Si sortOrder(orden de clasificación) es true ordena ascendente
          if (sortOrder){
              return data.slice().sort((a, b) => {
                  let m = a[sortBy];
                  let p = b[sortBy];
                  if (m < p) {
                      return -1;
                  } if (m > p) {
                      return 1;
                  } else {
                      return 0;
                  }
              });
          //Si no, ordena de forma descendente//
          } else {
           //aplicamos slice para que no modifique el array original//
              return data.slice().sort((a, b) => {
                  let m = a[sortBy];
                  let p = b[sortBy];
                  if (m < p) {
                      return 1;
                  } if (m> p) {
                      return -1;
                  } else {
                      return 0;
                  }
              });
            }
              break;
          //Ordenamos de forma ascendente (1-251) esto se logra con sort y slice.
            case 'num':
            if (sortOrder){
              return data.slice().sort((a, b) => {
                let m = a[sortBy];
                let p = b[sortBy];
                m-p
              });
        // ordena de forma descendente (251-1) con reverse 
            } else {
                return data.reverse().slice().sort((a, b) => {
                  let m = a[sortBy];
                  let p = b[sortBy];
                  m-p
                });
        }
      }
  }
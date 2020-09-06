// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//FUNCION FILTRO
export const filterData=(data,type,condicion)=>{
  let resultado="";
  switch(type){
    case "name":
      resultado=data.filter(poke=>poke.name===condicion);
      break;
    case "tipo":
      resultado=data.filter(poke=>poke.type.includes(condicion));
      break;
    case "generacion":
      resultado=data.filter(poke=>poke.generation.name===condicion);
      break;
    case "huevo":
      resultado=data.filter(poke=>poke.egg===condicion);
      break;
    case "caramelo":
      resultado=data.filter(poke=>poke.evolution.candy===condicion);
      break;
    case "letra":
      const expresion= new RegExp(condicion,"i"); 
      resultado=data.filter(poke=>expresion.test(poke.name));
      break;
  }
 return resultado;
}



// Ordena de forma ascendente,descendente,
// Creo una función sorData y se da tres parametros (data,ordenar por,orden de clasificación)
    export const sortData= (data, sortBy) => {
      switch(sortBy) {
        case 'A-Z':
          data.sort((a,b)=> a.name.localeCompare(b.name));
            break ;

        case 'Z-A':
          data.sort((a,b)=> b.name.localeCompare(a.name));
          break;
        case '1-251':
            data.sort((a,b)=> a.num-b.num);
            break ;
        case '251-1':
            data.sort((a,b)=> b.num-a.num);
            break ;

        default:
        data.sort((a,b)=>a.num-b.num)
          break ;
      }
      return(data);
    }
//   // FUNCIÓN QUE FILTRA POR % DE APARICIÓN
    export const sortSpawnChance = (pokemon1, pokemon2) => pokemon1['spawn-chance'] - pokemon2['spawn-chance'];

export const computeStats = (data,condition) => {
  let spawnChance = [];
  switch (condition) {
    case 'aparecer-alto':
      spawnChance = data.filter(pokemon => parseFloat(pokemon['spawn-chance']) > 5.10 && parseFloat(pokemon['spawn-chance']) < 16.00);
      return spawnChance.sort(sortSpawnChance);
    case 'aparecer-medio':
      spawnChance = data.filter(pokemon => parseFloat(pokemon['spawn-chance']) > 2.51 && parseFloat(pokemon['spawn-chance']) < 5.00);
      return spawnChance.sort(sortSpawnChance);
    case 'aprecer-bajo':
      spawnChance = data.filter(pokemon => parseFloat(pokemon['spawn-chance']) > 0.00 && parseFloat(pokemon['spawn-chance']) < 2.50);
      return spawnChance.sort(sortSpawnChance);

    default:
      spawnChance = data.filter(pokemon => pokemon['spawn-chance'] === null);
      return spawnChance;
  }
};

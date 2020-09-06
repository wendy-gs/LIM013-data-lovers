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
      const expresion=new RegExp(condicion,"i"); 
      resultado=data.filter(poke=>expresion.test(poke.name));
      break; 
    case "aparicion":
        switch(condicion){
        case "Alto":
          resultado=data.filter(pokemon => parseFloat(pokemon['spawn-chance']) > 5.10 && parseFloat(pokemon['spawn-chance']) < 16.00);
          break;
        case "Medio":
           resultado= data.filter(pokemon => parseFloat(pokemon['spawn-chance']) > 2.51 && parseFloat(pokemon['spawn-chance']) < 5.00);
           break;
        case "Bajo":
           resultado=data.filter(pokemon => parseFloat(pokemon['spawn-chance']) >= 0.00 && parseFloat(pokemon['spawn-chance']) < 2.50);
           break;
        case "Nulo":
           resultado=data.filter(pokemon => pokemon['spawn-chance'] === null);;
           break;
        }
  }
 return resultado;
}

//FUNCION ORDENA
export const sortData=(data,sortBy)=>{
  switch(sortBy){
    case "A-Z":
      data.sort((a,b)=>a.name.localeCompare(b.name));;
      break;
    case "Z-A":
      data.sort((a,b)=>b.name.localeCompare(a.name));
      break;   
    case "1-251":
      data.sort((a,b)=>a.num-b.num)
      break;      
    case "251-1":
        data.sort((a,b)=>b.num-a.num);
        break;
    case "Aparicion":
        data.sort((pokemon1,pokemon2)=>pokemon2['spawn-chance'] - pokemon1['spawn-chance']);
        break;
    default:
      data.sort((a,b)=>a.num-b.num);
        break;      
  }
  return data;
}
//FUNCION CALCULA
export const computeStats=(data,type)=>{
  let totalTipos=[];
  let cantidad=filterData(data,"tipo",type).length;
  let porcentaje=(cantidad/251)*100;
  totalTipos.push(cantidad);
  totalTipos.push(Math.round(porcentaje* 100)/ 100);
  return totalTipos;
}

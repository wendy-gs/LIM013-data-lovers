import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// console.log(example, data);



function poketemplate(pokemon){
    return `
    <div>
    <p>${pokemon.num}</p>
    <img src="${pokemon.img}">
    <p>${pokemon.name}</p>
    </div>
    `
}
document.getElementById("imagenes").innerHTML = `
<h1>pokemon ${data.pokemon.length}pokemon</h1>
${data.pokemon.map(poketemplate).join('')}
`
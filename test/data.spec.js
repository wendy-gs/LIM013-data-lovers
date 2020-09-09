import { filterData,sortData,computeStats} from '../src/data.js';

//CREAMOS UNA DATA APRA HACER PASAR EL TEST
const dataTest=[
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "spawn-chance": "0.69",
    "egg": "2 km",
  },
  {
    "num": "002",
    "name": "charmander",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire"
    ],
    "spawn-chance": "0.253",
    "egg": "5 km",
  },
  {
    "num": "003",
    "name": "charizard",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire",
      "flying"
    ],
    "spawn-chance": "0.0031",
    "egg": "not in eggs",
  },
  {
    "num": "004",
    "name": "squirtle",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "water"
    ],
    "spawn-chance": "0.58",
    "egg": "not in eggs",
  },
  {
    "num": "005",
    "name": "caterpie",
    "generation": {
      "num": "generation i",
      "name": "johto"
    },
    "type": [
      "bug"
    ],
    "spawn-chance":"3.032",
    "egg": "2 km",
  }
]
//CREMOAS RESULTADOS DEL TEST TIPO
const dataResultType=[
  {
    "num": "004",
    "name": "squirtle",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "water"
    ],
    "spawn-chance": "0.58",
    "egg": "not in eggs",
  }
]
const dataResultGeneration=[
  {
    "num": "005",
    "name": "caterpie",
    "generation": {
      "num": "generation i",
      "name": "johto"
    },
    "type": [
      "bug"
    ],
    "spawn-chance":"3.032",
    "egg": "2 km",
  }
]
const dataResultEgg=[
  {
    "num": "002",
    "name": "charmander",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire"
    ],
    "spawn-chance": "0.253",
    "egg": "5 km",
  }
]
const dataResultSpawn=[
  {
    "num": "005",
    "name": "caterpie",
    "generation": {
      "num": "generation i",
      "name": "johto"
    },
    "type": [
      "bug"
    ],
    "spawn-chance":"3.032",
    "egg": "2 km",
  }
]
const dataResultAlphaUpward=[
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "spawn-chance": "0.69",
    "egg": "2 km",
  },
  {
    "num": "005",
    "name": "caterpie",
    "generation": {
      "num": "generation i",
      "name": "johto"
    },
    "type": [
      "bug"
    ],
    "spawn-chance":"3.032",
    "egg": "2 km",
  },
  {
    "num": "003",
    "name": "charizard",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire",
      "flying"
    ],
    "spawn-chance": "0.0031",
    "egg": "not in eggs",
  },
  {
    "num": "002",
    "name": "charmander",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire"
    ],
    "spawn-chance": "0.253",
    "egg": "5 km",
  },
  {
    "num": "004",
    "name": "squirtle",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "water"
    ],
    "spawn-chance": "0.58",
    "egg": "not in eggs",
  }
]

const dataResultAlphaFalling=[
  {
    "num": "004",
    "name": "squirtle",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "water"
    ],
    "spawn-chance": "0.58",
    "egg": "not in eggs",
  },
  {
    "num": "002",
    "name": "charmander",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire"
    ],
    "spawn-chance": "0.253",
    "egg": "5 km",
  },
  {
    "num": "003",
    "name": "charizard",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire",
      "flying"
    ],
    "spawn-chance": "0.0031",
    "egg": "not in eggs",
  },
  {
    "num": "005",
    "name": "caterpie",
    "generation": {
      "num": "generation i",
      "name": "johto"
    },
    "type": [
      "bug"
    ],
    "spawn-chance":"3.032",
    "egg": "2 km",
  },
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "spawn-chance": "0.69",
    "egg": "2 km",
  } 
]
const dataResultNumUpward=[
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "spawn-chance": "0.69",
    "egg": "2 km",
  },
  {
    "num": "002",
    "name": "charmander",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire"
    ],
    "spawn-chance": "0.253",
    "egg": "5 km",
  },
  {
    "num": "003",
    "name": "charizard",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire",
      "flying"
    ],
    "spawn-chance": "0.0031",
    "egg": "not in eggs",
  },
  {
    "num": "004",
    "name": "squirtle",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "water"
    ],
    "spawn-chance": "0.58",
    "egg": "not in eggs",
  },
  {
    "num": "005",
    "name": "caterpie",
    "generation": {
      "num": "generation i",
      "name": "johto"
    },
    "type": [
      "bug"
    ],
    "spawn-chance":"3.032",
    "egg": "2 km",
  }
]
const dataResultNumFalling=[
  {
    "num": "005",
    "name": "caterpie",
    "generation": {
      "num": "generation i",
      "name": "johto"
    },
    "type": [
      "bug"
    ],
    "spawn-chance":"3.032",
    "egg": "2 km",
  },
  {
    "num": "004",
    "name": "squirtle",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "water"
    ],
    "spawn-chance": "0.58",
    "egg": "not in eggs",
  },
  {
    "num": "003",
    "name": "charizard",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire",
      "flying"
    ],
    "spawn-chance": "0.0031",
    "egg": "not in eggs",
  },
  {
    "num": "002",
    "name": "charmander",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire"
    ],
    "spawn-chance": "0.253",
    "egg": "5 km",
  },
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "spawn-chance": "0.69",
    "egg": "2 km",
  }
]
const dataResulCalculate=[2,40] //el resultado de pokemon volador

//TEST DE LA FUNCION FILTERDATA
describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it('should return an array for "dataTest","type","water"', () => {
    expect(filterData(dataTest,"tipo","water")).toEqual(dataResultType);
  });
  it('should return an array for "dataTest","generation","johto"', () => {
    expect(filterData(dataTest,"generacion","johto")).toEqual(dataResultGeneration);
  });
  it('should return an array for "dataTest","egg","5 km"', () => {
    expect(filterData(dataTest,"huevo","5 km")).toEqual(dataResultEgg);
  });
  it('should return an array for "dataTest","spawn-chance","Medio"', () => {
    expect(filterData(dataTest,"aparicion","Medio")).toEqual(dataResultSpawn);
  });
})
//TEST DE LA FUNCION SORTDATA
describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
  it('should return an array for "dataTest","order-Alpha","A-Z"', () => {
    expect(sortData(dataTest,"A-Z")).toEqual(dataResultAlphaUpward);
  });
  it('should return an array for "dataTest","order-Alpha","Z-A"', () => {
    expect(sortData(dataTest,"Z-A")).toEqual(dataResultAlphaFalling);
  });
  it('should return an array for "dataTest","order-num","1-251"', () => {
    expect(sortData(dataTest,"1-251")).toEqual(dataResultNumUpward);
  });
  it('should return an array for "dataTest","order-num","251-1"', () => {
    expect(sortData(dataTest,"251-1")).toEqual(dataResultNumFalling);
  });
})
//TEST DE LA FUNCION computeStats
describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });
  it('should return an array for "dataTest","calculate type"', () => {
    //expect(computeStats(dataTest,"bug")).toEqual(expect.arrayContaining(dataResulCalculate));
    expect(computeStats(dataTest,"fire")).toEqual(dataResulCalculate);
  });
})
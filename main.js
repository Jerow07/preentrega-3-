


class Pokemon {
    constructor(nombre, tipo) {
        this.id = nombre + pokemons.length + 1
        this.nombre = nombre;
        this.tipo = tipo;

    }
}

const pokemons = [

    { id: 1, nombre: "squartle", tipo: "agua" },
    { id: 2, nombre: "borbasaur", tipo: "planta" },
    { id: 3, nombre: "pikachu", tipo: "electrico" },
    { id: 9, nombre: "charizard", tipo: "fuego" },
    { id: 10, nombre: "gaslee", tipo: "oscuro" },
    { id: 11, nombre: "hitmotchan", tipo: "lucha" },
]

let inputNombre = document.getElementById("nombre")
let inputTipo = document.getElementById("tipo")
let botonAgregar = document.getElementById("botonagregar")
let botonBuscar = document.getElementById("botonbuscar")
let inputBuscar = document.getElementById("busqueda")
let botonFiltrar = document.getElementById("botonfiltrar")
let inputFiltrar = document.getElementById("filtrar")
let botonLimpiar = document.getElementById("limpiar")
let botonLimpiar1 = document.getElementById("limpiar1")
let divPadre = document.getElementById("contenedor")
let arrayNuevo = JSON.parse(localStorage.getItem("clave"))

if(arrayNuevo){
    mostrar(arrayNuevo)
}
else{
    mostrar(pokemons)
}

function mostrar(array) {
    divPadre.innerHTML = ''
    array.forEach(pokemon => {
        const { nombre , tipo, id} = pokemon
        let estructura = document.createElement("div")

        estructura.innerHTML = `
        <h1>Nombre de pokemon: ${nombre}</h1>      
          <h2>Tipo de pokemon: ${tipo}</h2>
          <button id="button${id}">Eliminar</button>

    `
        divPadre.append(estructura)
        document.getElementById("button"+id).addEventListener("click",()=>{
            const indice = pokemons.findIndex(pokemon => id === pokemon.id)
            pokemons.splice(indice , 1)
            mostrar(pokemons)
        })
        
    })
}

botonAgregar.addEventListener("click", () => {
    if(inputNombre.value !="" && isNaN(parseInt(inputNombre.value))){
    let pokemon = new Pokemon(inputNombre.value, inputTipo.value)
    pokemons.push(pokemon)
    mostrar(pokemons)   
    console.log(pokemons)
    inputNombre.value = "" 
    inputTipo.value = ""
    localStorage.setItem("clave", JSON.stringify(pokemons));}
    else{
        alert("Error de pokemon.")
    }

})

botonFiltrar.addEventListener("click", ()=> {
  const pokemonFiltrados =  pokemons.filter(pokemon => pokemon.tipo === inputFiltrar.value)
mostrar(pokemonFiltrados)

}
)

botonBuscar.addEventListener("click", ()=> {
const pokemonBusqueda = pokemons.find(pokemon=> pokemon.nombre  === inputBuscar.value)
mostrar([pokemonBusqueda])

})


botonLimpiar.addEventListener("click",()=>{
    inputFiltrar.value= ""
    inputBuscar.value=""
    mostrar(pokemons)
})

botonLimpiar1.addEventListener("click",()=>{
    inputFiltrar.value= ""
    inputBuscar.value=""
    mostrar(pokemons)
})

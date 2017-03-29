function Pokemon(nombrePokemon, colorPokemon, poderAtaque){
    this.nombre = nombrePokemon;
    this.color = colorPokemon;
    this.ataque = poderAtaque;
}

var pokemons=[];
function crearPokemon(){
    var nombre =document.getElementById("nombrePokemon");
    var color= document.getElementById("colorPokemon");
    var ataque= document.getElementById("poderAtaque");
    
    var pokemon = new Pokemon(nombre.value,color.value,parseInt(ataque.value));

 pokemons.push(pokemon); 
    mostrarPokemon()
    nombre.value=" ";
    color.value=" ";
    ataque.value=" ";
}
 var listaPokemon=document.getElementById("listaPokemons");
 var opciones= document.createElement("select");
 var elemento=document.createElement("option");
 
function mostrarPokemon(pokemon){
         pokemons.forEach(function(pokemon){
         elemento.innerText=pokemon.nombre +" "+ pokemon.color +" "+ pokemon.ataque;
         listaPokemon.appendChild(elemento);
    })
}

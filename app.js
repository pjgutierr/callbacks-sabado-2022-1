function iniciar(){
    console.log("Estoy iniciando")
}
function procesar(){
    setTimeout(function(){
        console.log("Estoy procesando")
    },5000)
    
}
function terminar(){
    console.log("Estoy terminando")
}
//Llamar funciones, 
iniciar()
procesar()
terminar()
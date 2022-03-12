//Declarando la función principal
function principal (nombre,callback){
setTimeout (function(){
    //PROCESO "¿QUE HACE ESTA FUNCION?"
    console.log("Hola "+nombre)
    //Despues de que termino el proceso llamo al callback
    callback()
},4000)
}
//llamo a la función principal, y también la funcion secundaria (callback)
principal("Paola", function(){
    console.log("¿Cómo estás? soy el callback")
})
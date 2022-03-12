//Declaro la función principal
function crearUsuario(nombre, edad, callback){
    setTimeout(function(){
        //Proceso que hace la función
        let usuario={
            nombreUsuario:nombre,
            edadUsuario:edad
          }
          //llamando al callback
          callback(usuario)
    },8000)
}
//LLamo  a la función principal
crearUsuario("James la banca", 31, function(usuario){
    if (usuario.edadUsuario>=18){
        console.log("Bienvenido")
    }
    else{
        console.log("Upss no puedes entrar")
    }
})
//declarando a la función principal
function principal(usuario, password){

    // defino un objeto de tipo PROMISE
    let promesa=new Promise(function(resolve, reject){
        
         //Proceso de la funcion principal
    setTimeout(function(){
            if (usuario=="james123" && password=="admin123")
            {
               resolve("bienvenido")
            }
            else
            {
                reject("revisar por favor")
            }
        },5000)
    })
    return (promesa)
}

//llamar a la funcion principal
principal('juanes128', 'login123')

.then(function(respuestaResolve){
    console.log(respuestaResolve)
})

.catch(function(respuestaCatch){
    console.log(respuestaCatch)
})
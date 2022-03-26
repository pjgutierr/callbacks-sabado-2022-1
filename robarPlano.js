//Declaro la función principal
function recibirPlanos(n1, n2, n3, n4, n5,n6, n7,n8, n9, n10, callback){
    //proceso de la función principal
        setTimeout (function(){
    //proceso que hace la función 
            let planos=[n1, n2, n3, n4, n5,n6, n7,n8, n9, n10]
            let planosFiltrados=planos.filter(function(plano){
                return (plano>=1 && plano<=10)
            })
            //llamo al callback
            callback(planosFiltrados)
        },5000)
}

//llamando la función principal
recibirPlanos(10,5,100,150,200,250,300,400,500,1000, function(planosFiltrados){
    if (planosFiltrados.length>0){
        
        console.log("Puedes irte, hay " + planosFiltrados.length  +  " planos ")
    }
    else{
        console.log("Te tienes que devolver, hay que buscar planos válidos")
    }
})


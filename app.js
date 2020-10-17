var app = new Vue({
    el: '#app',
    data: {
        nombre:"",
        edad:0,
        },
    mehods:{


            },
    computed:{
     saludoEdad(){

         this.edadNueva=2020-this.edad;

         
         if(21 < this.edadNueva < 31){
         
            this.mns = "👌 Que buena vida no? 🤙"
        }
        if(this.edadNueva < 21){
            this.mns = "👍 Waoo!! eres realmente joven, Vuejs te gustará. 🤙"
        }
        if(31 < this.edadNueva ){
            this.mns = "💪 Lo bueno esta recién por venir 🤙"
        }
        if(this.edad != 0){

            return `Tienes ${this.edadNueva} años ${this.mns}`
        }
     }   
    }
    
    
  })
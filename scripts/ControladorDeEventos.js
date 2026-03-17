import * as Sistema from './main.js'
import { Ruleta } from './Ruleta.js'



// Variables
const ruleta = new Ruleta(0)


function iniciar() {
    
}



function actualizar() {
    ruleta.actualizar()
    ruleta.dibujar()
}




export {
    iniciar,
    actualizar
}
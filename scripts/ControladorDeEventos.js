import * as Sistema from './main.js'
import { Ruleta } from './Ruleta.js'
import { Pelota } from './Pelota.js'



// Variables
const ruleta = new Ruleta(0)
const pelota = new Pelota(200, 200, 10, 10)


function iniciar() {
    
}



function actualizar() {
    ruleta.actualizar()
    ruleta.dibujar()

    pelota.actualizar()
    pelota.dibujar()
}




export {
    iniciar,
    actualizar
}
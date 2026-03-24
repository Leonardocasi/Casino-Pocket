import * as Sistema from './main.js'
import { Ruleta } from './Ruleta.js'
import { Pelota } from './Pelota.js'



// Variables
const ruleta = new Ruleta(0)
const pelota = new Pelota(500, 0, Math.random()*2*Math.PI, 1)


function iniciar() {
    
}



function actualizar() {
    ruleta.actualizar()
    ruleta.dibujar()

    pelota.actualizar(ruleta)
    pelota.dibujar()
}




export {
    iniciar,
    actualizar
}
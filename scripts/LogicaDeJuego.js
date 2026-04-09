import * as Sistema from './main.js'
import * as Interfaz from './Interfaz.js'
import * as Casilla from './Casilla.js'
import { Ruleta } from './Ruleta.js'
import { Pelota } from './Pelota.js'




// Variables necesarias.
const ruleta = new Ruleta(Math.random()*2*Math.PI)
const pelota = new Pelota(500, Math.random()*2*Math.PI)

var rondaTerminada
var ganador


// Funcion inicial del juego.
function iniciar() {
    rondaTerminada = false
	ganador = {}
}


// Bucle principal del juego.
function actualizar() {

	// Funciones del juego.
	if (!rondaTerminada) {
		ruleta.actualizar()
		pelota.actualizar(ruleta)
	} else {
		// Animación una vez terminada la ronda
		var distancia = Math.PI/2 - pelota.angulo

		if (Math.abs(distancia) > 0) {
			pelota.angulo += distancia * 2 * Sistema.CambioDeTiempo
			ruleta.angulo += distancia * 2 * Sistema.CambioDeTiempo
		}
	}

	if (pelota.radioMesa <= pelota.xMinimo && !rondaTerminada) {
		rondaTerminada = true

		ganador = Casilla.final(ruleta.angulo, pelota.angulo)
		console.log(ganador)
	}
	
	// Dibujados del juego
    ruleta.dibujar()
    pelota.dibujar()
	Interfaz.dibujar()
}




export {
    iniciar,
    actualizar
}
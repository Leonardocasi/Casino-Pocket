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
		ruleta.corregirAngulo()
		ruleta.actualizar()

		pelota.corregirAngulo()
		pelota.actualizar(ruleta)
	}
	
	// Animación una vez terminada la ronda
	if (rondaTerminada) {
		var distancia = Math.PI/2 - pelota.angulo
		
		if (Math.abs(distancia) > 0) {
			pelota.angulo += distancia * 2 * Sistema.CambioDeTiempo
			ruleta.angulo += distancia * 2 * Sistema.CambioDeTiempo
		}
		
		var distanciaRuleta = pelota.angulo - ganador.anguloFinal - ruleta.angulo

		if (Math.abs(distanciaRuleta) > (2*Math.PI/37)) distanciaRuleta += Math.PI*2

		if (Math.abs(distanciaRuleta) > 0) {
			ruleta.angulo += distanciaRuleta * 2 * Sistema.CambioDeTiempo
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
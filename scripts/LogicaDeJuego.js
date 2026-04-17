import * as Sistema from './main.js'
import * as Interfaz from './Interfaz.js'
import * as Casilla from './Casilla.js'
import { Ruleta } from './Ruleta.js'
import { Pelota } from './Pelota.js'
import { Ficha } from './Ficha.js'
import { Boton } from './Boton.js'




// Variables necesarias.
let ruleta
let pelota
let fichas = new Ficha(200, 200, 5)
const boton = new Boton(200, 200, "Reiniciar")

var rondaTerminada
var ganador


// Funcion inicial del juego.
function iniciar() {
	ruleta = new Ruleta(Math.random()*2*Math.PI)
	pelota = new Pelota(500, Math.random()*2*Math.PI)

    rondaTerminada = false
	ganador = {}

	fichas.iniciar()
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

		// Esto hace funcionar al botón.
		if (Sistema.cursor.clic &&
			
			Sistema.cursor.x >= boton.posicion.x &&
			Sistema.cursor.x <= boton.posicion.x + boton.ancho &&
			Sistema.cursor.y >= boton.posicion.y &&
			Sistema.cursor.y <= boton.posicion.y + boton.alto) {
			
			iniciar()
		}
	}

	if (pelota.radioMesa <= pelota.xMinimo && !rondaTerminada) {
		rondaTerminada = true

		ganador = Casilla.final(ruleta.angulo, pelota.angulo)
		//console.log(ganador)
	}



	
	// Dibujados del juego
    ruleta.dibujar()
    pelota.dibujar()
	//fichas.dibujar()

	// Dibujados relacionados a la interfaz.
	//Interfaz.dibujar()
	if (rondaTerminada) {
		Interfaz.mostrarCasillaGanadora(ganador)
		boton.dibujar()
	}
}




export {
    iniciar,
    actualizar
}
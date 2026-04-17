import * as Sistema from './main.js'
import { Dinero } from './Dinero.js'



function dibujar() {
	// Cantidad de dinero.
	Sistema.contexto.save()

	Sistema.contexto.fillStyle = "#ffffff"
	Sistema.contexto.font = `${50 * Sistema.escala}px plus jakarta sans`
	Sistema.contexto.textAlign = "left"
	Sistema.contexto.textBaseline = "top"

	Sistema.contexto.fillText(
		// Texto a mostrar.
		`Dinero: $${Dinero}`,

		// Posición.
		10 * Sistema.escala, 10 * Sistema.escala
	)

	Sistema.contexto.restore()
}


function mostrarCasillaGanadora(ganador) {
	var color

	switch(ganador.color) {
		case 0:
			color = "Negro"
			break
		
		case 1:
			color = "Rojo"
			break

		case 2:
			color = "Verde"
			break
	}

	// Casilla Ganadora
	Sistema.contexto.save()

	Sistema.contexto.fillStyle = "#ffffff"
	Sistema.contexto.font = `${100 * Sistema.escala}px plus jakarta sans`
	Sistema.contexto.textAlign = "center"
	Sistema.contexto.textBaseline = "middle"

	Sistema.contexto.fillText(
		// Texto a mostrar.
		`¡¡${ganador.casilla} ${color}!!`,

		// Posición.
		Sistema.lienzo.width/2, Sistema.lienzo.height/5
	)

	Sistema.contexto.restore()
}



export {
	dibujar,
	mostrarCasillaGanadora
}
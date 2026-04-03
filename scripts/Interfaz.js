import * as Sistema from './main.js'
import { Dinero } from './Dinero.js'



function dibujar() {
	Sistema.contexto.save()

	Sistema.contexto.fillStyle = "#ffffff"
	Sistema.contexto.font = `${50 * Sistema.escala}px plus jakarta sans`
	Sistema.contexto.textAllign = "left"
	Sistema.contexto.textBaseline = "top"

	Sistema.contexto.fillText(
		// Texto a mostrar.
		`Dinero: $${Dinero}`,

		// Posición.
		10 * Sistema.escala, 10 * Sistema.escala
	)

	Sistema.contexto.restore()
}



export {
	dibujar
}
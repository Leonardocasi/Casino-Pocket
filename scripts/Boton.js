import * as Sistema from './main.js'



class Boton {
	constructor(x, y, texto) {
		this.posicion = {x, y}
		this.texto = texto

		this.ancho = 250
		this.alto = 74

		this.color = "#ff0000"
		this.colorTexto = "#ffffff"
	}

	dibujar() {
		Sistema.contexto.save()
		// Color del borde del botón.
		Sistema.contexto.strokeStyle = this.color
		Sistema.contexto.lineWidth = 4 * Sistema.escala

		// Efecto del brillo.
		Sistema.contexto.shadowColor = this.color
		Sistema.contexto.shadowBlur = 20 * Sistema.escala

		// Dibujo del botón
		Sistema.contexto.beginPath()
		// Función personalizada para bordes redondeados
		Sistema.contexto.roundRect(
			// Coordenadas.
			this.posicion.x * Sistema.escala,
			this.posicion.y * Sistema.escala,

			// Tamaño.
			this.ancho * Sistema.escala,
			this.alto * Sistema.escala,
			
			// Redondeo de los bordes.
			15 * Sistema.escala
		) 
		Sistema.contexto.stroke()

		// Para el relleno del botón
		Sistema.contexto.fillStyle = `${this.color}40`
		Sistema.contexto.fill()



		// Dibujo del texto del botón.
		// Efecto del brillo.
		Sistema.contexto.shadowColor = this.colorTexto
		Sistema.contexto.shadowBlur = 20 * Sistema.escala

		Sistema.contexto.fillStyle = this.colorTexto
		Sistema.contexto.font = `${28 * Sistema.escala}px plus jakarta sans`
		Sistema.contexto.textAlign = "center"
		Sistema.contexto.textBaseline = "middle"
		Sistema.contexto.fillText(
			// Texto.
			this.texto,

			// Posición.
			(this.posicion.x + this.ancho / 2) * Sistema.escala,
			(this.posicion.y + this.alto / 2) * Sistema.escala 
		)

		Sistema.contexto.restore()
	}
}




export { Boton }
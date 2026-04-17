import * as Texturas from './Texturas.js'
import * as Sistema from './main.js'



class Ficha {
	constructor(x, y, valor) {
		this.posicion = {x, y}
		this.radio = 35
		this.valor = valor
		this.textura
	}

	iniciar() {
		switch(this.valor) {
			case 1:
				this.textura = Texturas.Ficha1
				break

			case 5:
				this.textura = Texturas.Ficha5
				break

			case 10:
				this.textura = Texturas.Ficha10
				break

			case 25:
				this.textura = Texturas.Ficha25
				break

			case 50:
				this.textura = Texturas.Ficha50
				break

			case 100:
				this.textura = Texturas.Ficha100
				break
		}
	}

	dibujar() {
		Sistema.contexto.fillStyle = "#000000"
		Sistema.contexto.fillRect(
			(this.posicion.x - this.radio) * Sistema.escala,   // La posición global es 0,0
			(this.posicion.y - this.radio) * Sistema.escala,   // La imágen se dibuja centrada

			this.radio*2*Sistema.escala,
			this.radio*2*Sistema.escala
		)

		Sistema.contexto.drawImage(
			// Textura a usar.
			this.textura,

			// Posición.
			(this.posicion.x - this.radio) * Sistema.escala,   // La posición global es 0,0
			(this.posicion.y - this.radio) * Sistema.escala,   // La imágen se dibuja centrada

			// Tamaño.
			this.radio * 2 * Sistema.escala,
			this.radio * 2 * Sistema.escala
		)
	}
}




export { Ficha }
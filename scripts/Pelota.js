import * as Sistema from './main.js'
import * as Texturas from './Texturas.js'



class Pelota {
    constructor(x, y, angulo, velocidad) {
        this.posicion = {x, y}
        this.angulo = angulo
        this.velocidad = velocidad
        this.textura = Texturas.Ruleta
    }

    actualizar() {
        
    }

    dibujar() {
        Sistema.contexto.save()

        // Dibujar círculo Blanco
        Sistema.contexto.fillStyle = "#ffffff"
        Sistema.contexto.beginPath()
		Sistema.contexto.arc(
			this.posicion.x,
			this.posicion.y,
			50,
			0, 6.2832,
			false
		)
		Sistema.contexto.fill()
		Sistema.contexto.closePath()

        Sistema.contexto.restore()
    }
}




export {
    Pelota
}
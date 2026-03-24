import * as Sistema from './main.js'
import * as Texturas from './Texturas.js'



class Pelota {
    constructor(x, y, angulo, velocidad) {
        this.posicion = {x, y}
        this.angulo = angulo
        this.radio = 10.5
        this.velocidad = velocidad
        this.textura = Texturas.Ruleta
        this.desaceleracion = 0.1
    }

    actualizar(Ruleta) {
        // Fricción
        if (this.velocidad > 0 && this.posicion.x > 270) {
            this.velocidad -= this.desaceleracion * Sistema.CambioDeTiempo
            this.angulo -= this.velocidad * Math.PI*2 * Sistema.CambioDeTiempo
        } else {
            this.angulo += Ruleta.velocidad * Math.PI*2 * Sistema.CambioDeTiempo;
            console.log(Ruleta.velocidad)
        }

        if (this.velocidad < 0.4 && this.posicion.x > 270)
            this.posicion.x -= 3
        
        //console.log(this.velocidad)
    }

    dibujar() {
        Sistema.contexto.save()

        // Usar Posición global para el giro.
        Sistema.contexto.translate(
            Sistema.Camara.x,   // Posición global 0,0
            Sistema.Camara.y
        )

        Sistema.contexto.rotate(this.angulo)

        // Dibujar círculo Blanco
        Sistema.contexto.fillStyle = "#ffffff"
        Sistema.contexto.beginPath()
		Sistema.contexto.arc(
			this.posicion.x * Sistema.escala,
			this.posicion.y * Sistema.escala,
			this.radio * Sistema.escala,
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
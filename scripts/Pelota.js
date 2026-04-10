import * as Sistema from './main.js'
import * as Texturas from './Texturas.js'



class Pelota {
    constructor(rMesa, angulo) {
        this.textura = Texturas.Ruleta

        this.radio = 10.5
        this.radioMesa = rMesa
		this.xMinimo = 238
        this.angulo = angulo
        this.velocidad = 1 + Math.random()/2		// Entre 1 y 1.5
		this.velocidadCaida = 0
        this.desaceleracion = 0.1
    }

    actualizar(Ruleta) {
        // Fricción
        if (this.velocidad > 0 && this.radioMesa > this.xMinimo) {
            this.velocidad -= this.desaceleracion * Sistema.CambioDeTiempo
            this.angulo += this.velocidad * Math.PI*2 * Sistema.CambioDeTiempo
        } /*else {
			this.velocidad = 0
            this.angulo -= Ruleta.velocidad * Math.PI*2 * Sistema.CambioDeTiempo;
        }*/

        if (this.velocidad < 0.4 && this.radioMesa > this.xMinimo) {
			this.velocidadCaida += 400 * Sistema.CambioDeTiempo
            this.radioMesa -= this.velocidadCaida * Sistema.CambioDeTiempo
		}

        
        //console.log(this.angulo)
    }


	corregirAngulo() {
		if (this.angulo < 0) this.angulo += 2*Math.PI
		if (this.angulo > 2*Math.PI) this.angulo -= 2*Math.PI
	}


    dibujar() {
        Sistema.contexto.save()

        // Usar Posición global para el giro.
        Sistema.contexto.translate(
            Sistema.Camara.x,
            Sistema.Camara.y
        )

        Sistema.contexto.rotate(-this.angulo)

        // Dibujar círculo Blanco
        Sistema.contexto.fillStyle = "#ffffff"
        Sistema.contexto.beginPath()
		Sistema.contexto.arc(
			this.radioMesa * Sistema.escala,
			0,
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
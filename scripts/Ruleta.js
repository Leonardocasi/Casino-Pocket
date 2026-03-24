import * as Sistema from './main.js'
import * as Texturas from './Texturas.js'




// Objeto Ruleta.
class Ruleta {
    constructor (angulo) {
        this.angulo = angulo
        this.textura = Texturas.Ruleta
        this.radio = 400

        this.velocidad = 0.6    // RPS. Rango entre 0.3 a 0.6 inicial
        this.friccion = 0.02*(2*Math.PI)
    }


    actualizar() {
        // Fricción
        if (this.velocidad > 0)
            this.velocidad -= this.friccion * Sistema.CambioDeTiempo
        this.angulo += this.velocidad * Math.PI*2 * Sistema.CambioDeTiempo

        console.log(this.velocidad)
    }


    dibujar() {
        const x = 150
        const y = 150


        Sistema.contexto.save()
        Sistema.contexto.translate(
            (x + this.radio) * Sistema.escala,
            (y + this.radio) * Sistema.escala
        )
        Sistema.contexto.rotate(this.angulo)
        Sistema.contexto.drawImage(
            // Textura a usar.
            this.textura,

            // Posición.
            -this.radio * Sistema.escala,
            -this.radio * Sistema.escala,

            // Tamaño.
            this.radio * 2 * Sistema.escala,
            this.radio * 2 * Sistema.escala

        )
        Sistema.contexto.restore()
    }
}




export { Ruleta }
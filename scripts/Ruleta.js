import * as Sistema from './main.js'
import * as Texturas from './Texturas.js'




// Objeto Ruleta.
class Ruleta {
    constructor (angulo) {
        this.angulo = angulo
        this.textura = Texturas.Ruleta
        this.radio = 400

        this.velocidad = 0.3    // RPS. Rango entre 0.3 a 0.6 inicial
        this.desaceleracion = 1/300   // 3.33 x10^-3 RPS^2
    }


    actualizar() {
        // Fricción
        if (this.velocidad > 0)
            this.velocidad -= this.desaceleracion * Sistema.CambioDeTiempo
        this.angulo += this.velocidad * Math.PI*2 * Sistema.CambioDeTiempo

        //console.log(this.velocidad)
        console.log(Math.random())
    }


    dibujar() {
        const x = 150
        const y = 150


        Sistema.contexto.save()
        Sistema.contexto.translate(
            Sistema.Camara.x,   // Posición global 0,0
            Sistema.Camara.y
        )

        Sistema.contexto.rotate(this.angulo)

        Sistema.contexto.drawImage(
            // Textura a usar.
            this.textura,

            // Posición.
            -this.radio * Sistema.escala,   // La posición global es 0,0
            -this.radio * Sistema.escala,   // La imágen se dibuja centrada

            // Tamaño.
            this.radio * 2 * Sistema.escala,
            this.radio * 2 * Sistema.escala
        )

        Sistema.contexto.restore()
    }
}




export { Ruleta }
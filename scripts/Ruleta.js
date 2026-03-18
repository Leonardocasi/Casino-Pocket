import * as Sistema from './main.js'
import * as Texturas from './Texturas.js'




// Objeto Ruleta.
class Ruleta {
    constructor (angulo) {
        this.angulo = angulo
        this.textura = Texturas.Ruleta
    }


    actualizar() {
        this.angulo += 0.06
    }


    dibujar() {
        const x = 500
        const y = 500


        Sistema.contexto.save()
        Sistema.contexto.translate(
            x + this.textura.width / 2,
            y + this.textura.height / 2
        )
        Sistema.contexto.rotate(this.angulo)
        Sistema.contexto.drawImage(
        this.textura,
            -this.textura.width / 2,
            -this.textura.height / 2
        )
        Sistema.contexto.restore()
    }
}




export { Ruleta }
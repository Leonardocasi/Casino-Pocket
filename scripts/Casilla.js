// Las casillas de la ruleta se dividen cada 2*PI/37

function final(anguloRuleta, anguloPelota) {
	var anguloFinal = anguloPelota - anguloRuleta
	if (anguloFinal < 0) anguloFinal += 2*Math.PI
	var ganador = {casilla: 0, color: 0, anguloFinal: 0} // Los colores son 0: negro, 1: rojo y 2: verde.

	//console.log(anguloFinal, anguloPelota, anguloRuleta)


	// Aquí se identificará en qué casilla cayó la pelota.
	if (anguloFinal >= 0 && anguloFinal < (2*Math.PI/37) * 1) {
		ganador.casilla = 0
		ganador.color = 2
		ganador.anguloFinal = ((2*Math.PI/37) * 1) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 1 && anguloFinal < (2*Math.PI/37) * 2) {
		ganador.casilla = 26
		ganador.color = 0
		ganador.anguloFinal = ((2*Math.PI/37) * 1 + (2*Math.PI/37) * 2) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 2 && anguloFinal < (2*Math.PI/37) * 3) {
		ganador.casilla = 3
		ganador.color = 1
		ganador.anguloFinal = ((2*Math.PI/37) * 2 + (2*Math.PI/37) * 3) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 3 && anguloFinal < (2*Math.PI/37) * 4) {
		ganador.casilla = 35
		ganador.color = 0
		ganador.anguloFinal = ((2*Math.PI/37) * 3 + (2*Math.PI/37) * 4) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 4 && anguloFinal < (2*Math.PI/37) * 5) {
		ganador.casilla = 12
		ganador.color = 1
		ganador.anguloFinal = ((2*Math.PI/37) * 4 + (2*Math.PI/37) * 5) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 5 && anguloFinal < (2*Math.PI/37) * 6) {
		ganador.casilla = 28
		ganador.color = 0
		ganador.anguloFinal = ((2*Math.PI/37) * 5 + (2*Math.PI/37) * 6) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 6 && anguloFinal < (2*Math.PI/37) * 7) {
		ganador.casilla = 7
		ganador.color = 1
		ganador.anguloFinal = ((2*Math.PI/37) * 6 + (2*Math.PI/37) * 7) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 7 && anguloFinal < (2*Math.PI/37) * 8) {
		ganador.casilla = 29
		ganador.color = 0
		ganador.anguloFinal = ((2*Math.PI/37) * 7 + (2*Math.PI/37) * 8) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 8 && anguloFinal < (2*Math.PI/37) * 9) {
		ganador.casilla = 18
		ganador.color = 1
		ganador.anguloFinal = ((2*Math.PI/37) * 8 + (2*Math.PI/37) * 9) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 9 && anguloFinal < (2*Math.PI/37) * 10) {
		ganador.casilla = 22
		ganador.color = 0
		ganador.anguloFinal = ((2*Math.PI/37) * 9 + (2*Math.PI/37) * 10) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 10 && anguloFinal < (2*Math.PI/37) * 11) {
		ganador.casilla = 9
		ganador.color = 1
		ganador.anguloFinal = ((2*Math.PI/37) * 10 + (2*Math.PI/37) * 11) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 11 && anguloFinal < (2*Math.PI/37) * 12) {
		ganador.casilla = 31
		ganador.color = 0
		ganador.anguloFinal = ((2*Math.PI/37) * 11 + (2*Math.PI/37) * 12) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 12 && anguloFinal < (2*Math.PI/37) * 13) {
		ganador.casilla = 14
		ganador.color = 1
		ganador.anguloFinal = ((2*Math.PI/37) * 12 + (2*Math.PI/37) * 13) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 13 && anguloFinal < (2*Math.PI/37) * 14) {
		ganador.casilla = 20
		ganador.color = 0
		ganador.anguloFinal = ((2*Math.PI/37) * 13 + (2*Math.PI/37) * 14) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 14 && anguloFinal < (2*Math.PI/37) * 15) {
		ganador.casilla = 1
		ganador.color = 1
		ganador.anguloFinal = ((2*Math.PI/37) * 14 + (2*Math.PI/37) * 15) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 15 && anguloFinal < (2*Math.PI/37) * 16) {
		ganador.casilla = 33
		ganador.color = 0
		ganador.anguloFinal = ((2*Math.PI/37) * 15 + (2*Math.PI/37) * 16) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 16 && anguloFinal < (2*Math.PI/37) * 17) {
		ganador.casilla = 16
		ganador.color = 1
		ganador.anguloFinal = ((2*Math.PI/37) * 16 + (2*Math.PI/37) * 17) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 17 && anguloFinal < (2*Math.PI/37) * 18) {
		ganador.casilla = 24
		ganador.color = 0
		ganador.anguloFinal = ((2*Math.PI/37) * 17 + (2*Math.PI/37) * 18) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 18 && anguloFinal < (2*Math.PI/37) * 19) {
		ganador.casilla = 5
		ganador.color = 1
		ganador.anguloFinal = ((2*Math.PI/37) * 18 + (2*Math.PI/37) * 19) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 19 && anguloFinal < (2*Math.PI/37) * 20) {
		ganador.casilla = 10
		ganador.color = 0
		ganador.anguloFinal = ((2*Math.PI/37) * 19 + (2*Math.PI/37) * 20) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 20 && anguloFinal < (2*Math.PI/37) * 21) {
		ganador.casilla = 23
		ganador.color = 1
		ganador.anguloFinal = (((2*Math.PI/37) * 20) + ((2*Math.PI/37) * 21)) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 21 && anguloFinal < (2*Math.PI/37) * 22) {
		ganador.casilla = 8
		ganador.color = 0
		ganador.anguloFinal = ((2*Math.PI/37) * 21 + (2*Math.PI/37) * 22) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 22 && anguloFinal < (2*Math.PI/37) * 23) {
		ganador.casilla = 30
		ganador.color = 1
		ganador.anguloFinal = ((2*Math.PI/37) * 22 + (2*Math.PI/37) * 23) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 23 && anguloFinal < (2*Math.PI/37) * 24) {
		ganador.casilla = 11
		ganador.color = 0
		ganador.anguloFinal = ((2*Math.PI/37) * 23 + (2*Math.PI/37) * 24) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 24 && anguloFinal < (2*Math.PI/37) * 25) {
		ganador.casilla = 36
		ganador.color = 1
		ganador.anguloFinal = ((2*Math.PI/37) * 24 + (2*Math.PI/37) * 25) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 25 && anguloFinal < (2*Math.PI/37) * 26) {
		ganador.casilla = 13
		ganador.color = 0
		ganador.anguloFinal = ((2*Math.PI/37) * 25 + (2*Math.PI/37) * 26) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 26 && anguloFinal < (2*Math.PI/37) * 27) {
		ganador.casilla = 27
		ganador.color = 1
		ganador.anguloFinal = ((2*Math.PI/37) * 26 + (2*Math.PI/37) * 27) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 27 && anguloFinal < (2*Math.PI/37) * 28) {
		ganador.casilla = 6
		ganador.color = 0
		ganador.anguloFinal = ((2*Math.PI/37) * 27 + (2*Math.PI/37) * 28) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 28 && anguloFinal < (2*Math.PI/37) * 29) {
		ganador.casilla = 34
		ganador.color = 1
		ganador.anguloFinal = ((2*Math.PI/37) * 28 + (2*Math.PI/37) * 29) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 29 && anguloFinal < (2*Math.PI/37) * 30) {
		ganador.casilla = 17
		ganador.color = 0
		ganador.anguloFinal = ((2*Math.PI/37) * 29 + (2*Math.PI/37) * 30) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 30 && anguloFinal < (2*Math.PI/37) * 31) {
		ganador.casilla = 25
		ganador.color = 1
		ganador.anguloFinal = ((2*Math.PI/37) * 30 + (2*Math.PI/37) * 31) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 31 && anguloFinal < (2*Math.PI/37) * 32) {
		ganador.casilla = 2
		ganador.color = 0
		ganador.anguloFinal = ((2*Math.PI/37) * 31 + (2*Math.PI/37) * 32) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 32 && anguloFinal < (2*Math.PI/37) * 33) {
		ganador.casilla = 21
		ganador.color = 1
		ganador.anguloFinal = ((2*Math.PI/37) * 32 + (2*Math.PI/37) * 33) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 33 && anguloFinal < (2*Math.PI/37) * 34) {
		ganador.casilla = 4
		ganador.color = 0
		ganador.anguloFinal = ((2*Math.PI/37) * 33 + (2*Math.PI/37) * 34) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 34 && anguloFinal < (2*Math.PI/37) * 35) {
		ganador.casilla = 19
		ganador.color = 1
		ganador.anguloFinal = ((2*Math.PI/37) * 34 + (2*Math.PI/37) * 35) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 35 && anguloFinal < (2*Math.PI/37) * 36) {
		ganador.casilla = 15
		ganador.color = 0
		ganador.anguloFinal = ((2*Math.PI/37) * 35 + (2*Math.PI/37) * 36) / 2
	}

	else if (anguloFinal >= (2*Math.PI/37) * 36 && anguloFinal < (2*Math.PI/37) * 37) {
		ganador.casilla = 32
		ganador.color = 1
		ganador.anguloFinal = ((2*Math.PI/37) * 36 + (2*Math.PI/37) * 37) / 2
	}

	return ganador
}




export { final }
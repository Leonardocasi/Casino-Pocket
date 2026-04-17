// Este código tiene como objetivo preparar todo el terreno para ejecutar el juego.

import * as Control from './LogicaDeJuego.js'


// Inizialización del entorno gráfico.
const lienzo = document.getElementById("game")
const contexto = lienzo.getContext("2d")

// Establecimiento de la resolución de la ventana del juego
// a la misma resolución que la ventana del navegador.
lienzo.width = innerWidth
lienzo.height = innerHeight

// Escala de la cámara.
// Las medidas para la física fueron establecidas en mm.
let escala = 0.8




// Variables necesarias para el cálculo de las físicas.
// independientes de los FPS.
let CambioDeTiempo = 0
let ultimaMarcaDeTiempo = 0




// Variables para los controles.
const cursor = {
	// Posición
	x: 0, 
	y: 0,

	// Estado del clic
	clic: false
}



// Cámara
let Camara = {x: lienzo.width/2, y: lienzo.height/2}




// Función principal del juego.
function inicio() {
	window.onload = function() {
		Control.iniciar()
		requestAnimationFrame(BuclePrincipal)
	}
}




// Búcle principal del juego.
function BuclePrincipal(marcaDeTiempo) {
	requestAnimationFrame(BuclePrincipal)
	CambioDeTiempo = (marcaDeTiempo - ultimaMarcaDeTiempo) / 1000
	ultimaMarcaDeTiempo = marcaDeTiempo

	contexto.clearRect(0,0, lienzo.width, lienzo.height)

	Control.actualizar()
}




// detección del clic del mouse.
lienzo.addEventListener('mousedown', function(event) {
	estadoDelClic(event.button, true)
})


// Detección del alza del clic del mouse.
lienzo.addEventListener('mouseup', function(event) {
	estadoDelClic(event.button, false)
})


// Detección de la ubicación del mouse.
lienzo.addEventListener('mousemove', function(event) {
	// Obtén las coordenadas del borde del canvas
    const rect = lienzo.getBoundingClientRect()
    
    // Calcula las coordenadas x y y del cursor con respecto al canvas
    cursor.x = Math.round((event.clientX - rect.left) / escala)
    cursor.y = Math.round((event.clientY - rect.top) / escala)
})


// Función de alternación para los clics del mouse.
function estadoDelClic(clic, estado) {
	switch(clic) {
		case 0: 
			cursor.clic = estado
			break
	}
}




// Exportación de lo que se utilizará en otros códigos.
export {
	inicio,
	lienzo,
	contexto,
	CambioDeTiempo,
	escala,
	Camara,
	cursor
}
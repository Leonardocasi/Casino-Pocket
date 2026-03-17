// Este código tiene como objetivo preparar todo el terreno para ejecutar el juego.


// Inizialización del entorno gráfico.
const lienzo = document.getElementById("game")
const contexto = lienzo.getContext("2d")

// Establecimiento de la resolución de la ventana del juego
// a la misma resolución que la ventana del navegador.
lienzo.width = innerWidth
lienzo.height = innerHeight

// Escala de la cámara.
let escala = 1




// Variables necesarias para el cálculo de las físicas.
// independientes de los FPS.
const FramesPerfectos = 1000/60
let CambioDeTiempo = 0
let ultimaMarcaDeTiempo = 0




// Variables para los controles.
const teclas = {}




// Función principal del juego.
function inicio() {
	window.onload = function() {
		requestAnimationFrame(BuclePrincipal)
	}
}




// Búcle principal del juego.
function BuclePrincipal(marcaDeTiempo) {
	requestAnimationFrame(BuclePrincipal)
	CambioDeTiempo = (marcaDeTiempo - ultimaMarcaDeTiempo) / FramesPerfectos
	ultimaMarcaDeTiempo = marcaDeTiempo

	contexto.clearRect(0,0, lienzo.width, lienzo.height)
}




// Exportación de lo que se utilizará en otros códigos.
export {
	inicio,
	lienzo,
	contexto,
	CambioDeTiempo,
	escala
}
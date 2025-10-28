// Juego 1: Adivina el número
function iniciarAdivina() {
  const numero = Math.floor(Math.random() * 10) + 1;
  const intento = prompt("Adivina el número del 1 al 10:");
  const resultado = document.getElementById("resultadoAdivina");

  if (parseInt(intento) === numero) {
    resultado.textContent = "🎉 ¡Correcto! Adivinaste el número " + numero;
  } else {
    resultado.textContent = "❌ Incorrecto. El número era " + numero;
  }
}

// Juego 2: Clic Rápido
let contador = 0;
let juegoActivo = false;

function juegoClic() {
  if (!juegoActivo) {
    contador = 0;
    juegoActivo = true;
    const resultado = document.getElementById("resultadoClic");
    resultado.textContent = "Clics: " + contador;
    setTimeout(() => {
      if (contador >= 10) {
        resultado.textContent = "🔥 ¡Excelente reflejo! 10 clics logrados.";
      } else {
        resultado.textContent = "⏰ Tiempo agotado. Inténtalo de nuevo.";
      }
      juegoActivo = false;
    }, 3000); // 3 segundos para clicar
  } else {
    contador++;
    const resultado = document.getElementById("resultadoClic");
    resultado.textContent = "Clics: " + contador;
    if (contador === 10) {
      resultado.textContent = "🔥 ¡Excelente reflejo! 10 clics logrados.";
      juegoActivo = false;
    }
  }
}

// Juego 3: Quiz relámpago
function iniciarQuiz() {
  const preguntas = [
    { pregunta: "¿Cuál es el color del cielo?", respuesta: "azul" },
    { pregunta: "¿Cuánto es 5 + 3?", respuesta: "8" },
    { pregunta: "¿Qué lenguaje usamos para estilos web?", respuesta: "css" }
  ];
  let puntaje = 0;
  for (let i = 0; i < preguntas.length; i++) {
    const userResp = prompt(preguntas[i].pregunta).toLowerCase();
    if (userResp === preguntas[i].respuesta) {
      puntaje++;
    }
  }
  document.getElementById("resultadoQuiz").textContent = `🏆 Aciertos: ${puntaje}/${preguntas.length}`;
}

// Enviar formulario
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("mensajeEnviado").textContent = "📨 ¡Mensaje enviado correctamente!";
  this.reset();
});

// Activar animaciones fade-in al cargar
window.addEventListener('load', () => {
  const sections = document.querySelectorAll('.seccion');
  sections.forEach(section => {
    section.classList.add('fade-in');
  });
});

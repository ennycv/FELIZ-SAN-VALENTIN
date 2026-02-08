// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Qué bonita", time: 0 },
  { text: "Te miras mirando hacia el cielo", time: 0.5 },
  { text: "Diciéndome cosas eternas", time: 7 },
  { text: "Que nadie entiende de la vida", time: 9 },
  { text: "Qué bonita", time: 16 },
  { text: "Te miras posando en la hierba", time: 19 },
  { text: "Tus labios rojizos sin prisa", time: 25 },
  { text: "Me besan y erizan mi piel", time: 28 },
  { text: "Yo le pido a Dios", time: 34 },
  { text: "Que nunca te aleje de mi vivir", time: 38},
  { text: "Que el viento se lleve nuestro sufrir", time: 43 },
  { text: "En esta mañana con sol", time: 47 },
  { text: "Si sientes temor", time: 52 },
  { text: "Por todo el pasado que hay en ti", time: 56 },
  { text: "Yo me comprometo a sanar tu corazón", time: 61.5},
  { text: "Con dulzura", time: 67 },
  { text: "Qué bonita", time: 75 },
  { text: "Te miras durmiendo en mi pecho", time: 77 },
  { text: "La noche que viaja en tus ojos", time: 83 },
  { text: "La almohada que vive en tus sueños", time: 88 },
  { text: "Qué bonita", time: 91 },
  { text: "Tu alma divina y tan viva", time: 97 },
  { text: "Me llenas de tanta alegría", time: 101 },
  { text: "Me abrazas y enchinas mi piel", time: 106 },
  { text: "Yo le pido a Dios", time: 111 },
  { text: "Que nunca te aleje de mi vivir", time: 112.2 },
  { text: "Que el viento se lleve nuestro sufrir", time: 119 },
  { text: "En esta mañana con sol", time: 124 },
  { text: "Si sientes temor", time: 127 },
  { text: "Por todo el pasado que hay en ti", time: 133 },
  { text: "Yo me comprometo a sanar tu corazón", time: 138 },
  { text: "Con dulzura", time:  143},
  { text: "Con ternura", time: 148 },
  { text: "Con dulzura", time: 153 },
  { text: "Ay, ah", time: 154 },
  { text: "Oh...", time: 158 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
let preguntas = [
    {
        texto: "¿Cuántas veces se repite el número 3 en la secuencia 3, 6, 9, 3, 12, 3, 15?",
        respuestaCorrecta: 3
    },
    {
        texto: "¿Cuántas veces se repite el número 5 en la secuencia 5, 10, 5, 20, 5?",
        respuestaCorrecta: 3
    },
    {
        texto: "¿Cuántas veces se repite el número 7 en la secuencia 7, 14, 21?",
        respuestaCorrecta: 1
    }
];

let preguntaActual = 0;

// Función para verificar la respuesta seleccionada
function verificarRespuesta(respuestaSeleccionada) {
    const feedback = document.getElementById("retroalimentacion");
    
    if (respuestaSeleccionada === preguntas[preguntaActual].respuestaCorrecta) {
        feedback.textContent = "¡Correcto! Has identificado correctamente las repeticiones.";
        feedback.style.color = "green";  // Color verde para la respuesta correcta
    } else {
        feedback.textContent = "Incorrecto. Intenta de nuevo.";
        feedback.style.color = "red";  // Color rojo para la respuesta incorrecta
    }
}

// Función para cargar la siguiente pregunta
function siguientePregunta() {
    preguntaActual++;
    
    if (preguntaActual < preguntas.length) {
        cargarPregunta();
        document.getElementById("retroalimentacion").textContent = ""; // Limpiar retroalimentación
    } else {
        document.getElementById("pregunta-texto").textContent = "¡Has completado todas las preguntas!";
        document.getElementById("opciones").style.display = "none"; // Ocultar opciones
        document.getElementById("boton-siguiente").style.display = "none"; // Ocultar botón siguiente
    }
}

// Función para cargar una nueva pregunta
function cargarPregunta() {
    const preguntaTexto = document.getElementById("pregunta-texto");
    preguntaTexto.textContent = preguntas[preguntaActual].texto;

    // Actualizar opciones de respuesta (puedes personalizarlas más adelante)
    const opcionesDiv = document.getElementById("opciones");
    opcionesDiv.innerHTML = ''; // Limpiar opciones anteriores

    // Opciones dinámicas, adaptadas a las respuestas correctas
    const opciones = [
        `${preguntas[preguntaActual].respuestaCorrecta - 1} vez${preguntas[preguntaActual].respuestaCorrecta > 2 ? '' : ''}`,
        `${preguntas[preguntaActual].respuestaCorrecta} vez${preguntas[preguntaActual].respuestaCorrecta > 2 ? '' : ''}`,
        `${preguntas[preguntaActual].respuestaCorrecta + 1} vez${preguntas[preguntaActual].respuestaCorrecta > 2 ? '' : ''}`,
        `${preguntas[preguntaActual].respuestaCorrecta + 2} vez${preguntas[preguntaActual].respuestaCorrecta > 2 ? '' : ''}`
    ];

    // Aleatorizar las opciones para hacer el test más desafiante
    opciones.sort(() => Math.random() - 0.5);  // Mezcla aleatoriamente las opciones

    // Crear botones con las opciones
    opciones.forEach(opcion => {
        const button = document.createElement("button");
        button.textContent = opcion;
        button.onclick = () => verificarRespuesta(parseInt(opcion));
        opcionesDiv.appendChild(button);
    });
}

// Cargar la primera pregunta al iniciar
cargarPregunta();

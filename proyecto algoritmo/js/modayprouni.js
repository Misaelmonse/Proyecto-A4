// Función para calcular el promedio de las notas
function calcularPromedio(notas) {
    const sumaNotas = notas.reduce((acc, nota) => acc + nota, 0); // Sumar todas las notas
    return sumaNotas / notas.length; // Dividir por la cantidad de notas para obtener el promedio
}

// Función para calcular la moda de las notas
function calcularModa(notas) {
    const frecuencia = {}; // Objeto para contar las veces que se repite cada nota
    let maxFrecuencia = 0;
    let moda = [];

    // Calcular la frecuencia de cada nota
    for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];
        frecuencia[nota] = (frecuencia[nota] || 0) + 1;
        if (frecuencia[nota] > maxFrecuencia) {
            maxFrecuencia = frecuencia[nota];
        }
    }

    // Obtener las notas que tienen la mayor frecuencia (moda)
    for (let nota in frecuencia) {
        if (frecuencia[nota] === maxFrecuencia) {
            moda.push(Number(nota)); // Convertir la nota a número y agregarla a la lista de moda
        }
    }

    return moda;
}

// Función para obtener el promedio y la moda del arreglo de notas
function obtenerPromedioYModa() {
    // Obtener el valor ingresado en el campo de texto
    const arregloInput = document.getElementById("notas").value;

    // Convertir el texto a un arreglo de números
    const notas = arregloInput.split(',').map(num => parseFloat(num.trim())); 

    // Verificar si el arreglo está vacío
    if (notas.length === 0 || notas.some(isNaN)) {
        document.getElementById("resultado").textContent = "Por favor, ingresa un conjunto válido de notas.";
        return;
    }

    // Calcular el promedio y la moda
    const promedio = calcularPromedio(notas);
    const moda = calcularModa(notas);

    // Mostrar el resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<strong>Promedio:</strong> ${promedio.toFixed(2)} <br> 
                              <strong>Moda:</strong> ${moda.length > 1 ? "Varios valores (" + moda.join(', ') + ")" : moda[0]}`;
}

// Función para verificar si un número es perfecto
function esPerfecto(numero) {
    if (numero <= 1) return false;
    let sumaDivisores = 0;
    for (let i = 1; i <= Math.floor(numero / 2); i++) {
        if (numero % i === 0) sumaDivisores += i;
    }
    return sumaDivisores === numero;
}

// Función para obtener números perfectos del arreglo ingresado
function obtenerPerfectos() {
    const arregloInput = document.getElementById("arreglo").value;
    const numeros = arregloInput.split(',').map(num => parseInt(num.trim())); // Convertir a arreglo de números
    const perfectos = numeros.filter(esPerfecto); // Filtrar solo números perfectos

    const resultadoDiv = document.getElementById("resultado");
    if (perfectos.length > 0) {
        resultadoDiv.textContent = "Números perfectos en el arreglo: " + perfectos.join(', ');
    } else {
        resultadoDiv.textContent = "No se encontraron números perfectos en el arreglo ingresado.";
    }
}

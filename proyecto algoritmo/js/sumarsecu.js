function calcularSuma() {
    // Obtener el número ingresado por el usuario
    let numero = document.getElementById("numero-input").value;

    // Verificar si el número es válido
    if (numero <= 0 || isNaN(numero)) {
        alert("Por favor, ingresa un número entero positivo.");
        return;
    }

    // Inicializar la suma
    let suma = 0;

    // Usar un bucle para sumar los números naturales hasta el número ingresado
    for (let i = 1; i <= numero; i++) {
        suma += i;
    }

    // Mostrar el resultado en el HTML
    document.getElementById("resultado").innerText = `La suma de los primeros ${numero} números naturales es: ${suma}`;
}

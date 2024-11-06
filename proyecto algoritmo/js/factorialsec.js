function calcularFactorial() {
    // Obtener el número ingresado por el usuario
    let numero = document.getElementById("numero-input").value;

    // Verificar si el número es válido
    if (numero <= 0 || isNaN(numero)) {
        alert("Por favor, ingresa un número entero positivo.");
        return;
    }

    // Inicializar el factorial en 1
    let factorial = 1;

    // Usar un bucle para calcular el factorial
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    // Mostrar el resultado en el HTML
    document.getElementById("resultado").innerText = `El factorial de ${numero} es: ${factorial}`;
}

function generarFibonacci() {
    let numero = parseInt(document.getElementById("numero").value);

    // Validar que el número ingresado sea positivo
    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, ingresa un número entero positivo.");
        return;
    }

    // Inicializar los primeros dos números de la secuencia
    let a = 0, b = 1;
    let resultado = [];

    // Generar la secuencia de Fibonacci
    for (let i = 1; i <= numero; i++) {
        resultado.push(a);
        let siguiente = a + b;
        a = b;
        b = siguiente;
    }

    // Mostrar la secuencia de Fibonacci
    document.getElementById("resultado").innerHTML = "Secuencia de Fibonacci: " + resultado.join(", ");
}

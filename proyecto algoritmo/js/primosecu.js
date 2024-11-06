function verificarPrimo() {
    let numero = parseInt(document.getElementById("numero").value);

    // Validar que el número ingresado sea positivo
    if (isNaN(numero) || numero <= 1) {
        alert("Por favor, ingresa un número entero positivo mayor a 1.");
        return;
    }

    let esPrimo = true;

    // Verificar si el número es primo
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }

    // Mostrar el resultado
    if (esPrimo) {
        document.getElementById("resultado").innerHTML = `${numero} es un número primo.`;
    } else {
        document.getElementById("resultado").innerHTML = `${numero} no es un número primo.`;
    }
}

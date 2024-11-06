function verificarPerfecto() {
    let numero = parseInt(document.getElementById("numero").value);

    // Validar que el número ingresado sea mayor que 1
    if (isNaN(numero) || numero <= 1) {
        alert("Por favor, ingresa un número entero positivo mayor a 1.");
        return;
    }

    let sumaDivisores = 0;

    // Calcular la suma de los divisores del número
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }

    // Verificar si el número es perfecto
    if (sumaDivisores === numero) {
        document.getElementById("resultado").innerHTML = `${numero} es un número perfecto.`;
    } else {
        document.getElementById("resultado").innerHTML = `${numero} no es un número perfecto.`;
    }
}

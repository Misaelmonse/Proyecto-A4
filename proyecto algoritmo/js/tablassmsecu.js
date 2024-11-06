function generarTabla() {
    // Obtener los valores de los inputs
    let numero = parseInt(document.getElementById("numero").value);
    let tipoTabla = document.getElementById("tipo-tabla").value;

    // Validar que el número sea válido
    if (isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    // Inicializar el contenido de la tabla
    let resultado = '';

    // Generar la tabla de multiplicar o sumar
    for (let i = 1; i <= 10; i++) {
        if (tipoTabla === "multiplicar") {
            resultado += `<p>${numero} x ${i} = ${numero * i}</p>`;
        } else if (tipoTabla === "sumar") {
            resultado += `<p>${numero} + ${i} = ${numero + i}</p>`;
        }
    }

    // Mostrar los resultados en el HTML
    document.getElementById("resultado").innerHTML = resultado;
}

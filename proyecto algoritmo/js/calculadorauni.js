let operacionActual = '';
let resultado = '';

function agregarNumero(numero) {
    if (resultado) {
        operacionActual = resultado; // Si hay un resultado previo, lo reemplazamos
        resultado = '';
    }
    operacionActual += numero;
    document.getElementById('resultado').value = operacionActual || '0'; // Mostrar '0' si no hay operación
}

function realizarOperacion(operador) {
    if (resultado) {
        operacionActual = resultado; // Si hay un resultado previo, lo reemplazamos
        resultado = '';
    }
    operacionActual += ` ${operador} `;
    document.getElementById('resultado').value = operacionActual; // Mostrar la operación en curso
}

function calcularResultado() {
    try {
        resultado = eval(operacionActual);
        document.getElementById('resultado').value = resultado; // Mostrar el resultado
        operacionActual = ''; // Reiniciar para la próxima operación
    } catch (error) {
        document.getElementById('resultado').value = 'Error'; // Manejar errores de operación
        operacionActual = '';
    }
}

function limpiar() {
    operacionActual = '';
    resultado = '';
    document.getElementById('resultado').value = '0'; // Reiniciar el display
}

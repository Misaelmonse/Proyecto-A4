function calcularParesImpares() {
    // Obtener los valores de los inputs
    let inicio = parseInt(document.getElementById("inicio").value);
    let fin = parseInt(document.getElementById("fin").value);

    // Validar que ambos números sean enteros
    if (isNaN(inicio) || isNaN(fin)) {
        alert("Por favor, ingresa dos números enteros válidos.");
        return;
    }

    // Arrays para almacenar los números pares e impares
    let pares = [];
    let impares = [];

    // Asegurarse de que el número de inicio sea menor que el de fin
    if (inicio > fin) {
        [inicio, fin] = [fin, inicio]; // Intercambia los valores si es necesario
    }

    // Bucle para recorrer el rango de números
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        } else {
            impares.push(i);
        }
    }

    // Mostrar los resultados en el HTML
    document.getElementById("resultado").innerHTML = `
        <p><strong>Números Pares:</strong> ${pares.join(", ")}</p>
        <p><strong>Números Impares:</strong> ${impares.join(", ")}</p>
    `;
}

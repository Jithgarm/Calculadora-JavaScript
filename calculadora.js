// Este evento asegura que el código se ejecute solo después de que el DOM se haya cargado completamente.
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el elemento de la pantalla de la calculadora
    const pantalla = document.querySelector('.pantalla');
    // Inicializa variables para manejar la memoria, el operador, el resultado y el valor de la memoria
    let memoria = '';
    let operador = '';
    let resultado = '';
    let memoriaValor = 0;

    // Selecciona todos los botones de la calculadora
    const botones = document.querySelectorAll('#fondocalculadora button');
    // Asigna un evento 'click' a cada botón
    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const valor = this.textContent;

            // Reinicia la pantalla si muestra un error o infinito
            if (pantalla.textContent == "Error!" || pantalla.textContent == "Infinity") {
                pantalla.textContent = "0";
            } else {
                // Maneja el botón 'AC' para reiniciar la calculadora
                if (valor === 'AC') {
                    pantalla.textContent = '0';
                    memoria = '';
                    operador = '';
                    resultado = '';
                // Maneja el botón '←' para borrar el último carácter
                } else if (valor === '←') {
                    if (pantalla.textContent.length == 1) {
                        pantalla.textContent = "0";
                    } else {
                        pantalla.textContent = pantalla.textContent.slice(0, -1);
                    }
                // Maneja el botón '=' para evaluar la expresión
                } else if (valor === '=') {
                    try {
                        pantalla.textContent = eval(pantalla.textContent.replace('x', '*').replace('÷', '/'));
                        memoria = pantalla.textContent;
                        operador = '';
                    } catch (error) {
                        pantalla.textContent = "Error!";
                    }
                // Convierte horas decimales a formato 'hh:mm:ss'
                } else if (valor === 'H/M/S') {
                    let totalSeconds = parseFloat(pantalla.textContent) * 3600;
                    let hours = Math.floor(totalSeconds / 3600);
                    totalSeconds %= 3600;
                    let minutes = Math.floor(totalSeconds / 60);
                    let seconds = totalSeconds % 60;
                    pantalla.textContent = `${hours}h ${minutes}m ${seconds}s`;
                // Calcula la raíz cuadrada del valor en la pantalla
                } else if (valor === '√') {
                    pantalla.textContent = Math.sqrt(parseFloat(pantalla.textContent));
                // Calcula el porcentaje del valor en la pantalla
                } else if (valor === '%') {
                    // Divide el contenido de la pantalla en partes usando los operadores como delimitadores
                    let partes = pantalla.textContent.split(/([+\-x÷])/);
                    // Verifica si la longitud del array es 3 (dos números y un operador, por ejemplo, 100 x 20)
                    if (partes.length === 3) {
                        // Extrae y convierte los números y el operador
                        let num1 = parseFloat(partes[0]);
                        let operador = partes[1];
                        let num2 = parseFloat(partes[2]);
                        // Calcula el porcentaje del primer número con respecto al segundo número
                        let resultado = (num1 * num2) / 100;
                        pantalla.textContent = Number.isInteger(resultado) ? resultado.toString() : resultado.toFixed(2);
                    } else {
                        // Actualiza la pantalla con el resultado, formateando si es necesario
                        let resultado = (parseFloat(pantalla.textContent) / 100);
                        // Actualiza la pantalla con el resultado, formateando si es necesario
                        pantalla.textContent = Number.isInteger(resultado) ? resultado.toString() : resultado.toFixed(2);
                    }
                // Reduce el valor en un 10%
                } else if (valor === 'TAX-') {
                    let resultado = (parseFloat(pantalla.textContent) * 0.9);
                    pantalla.textContent = Number.isInteger(resultado) ? resultado.toString() : resultado.toFixed(2);
                // Aumenta el valor en un 10%
                } else if (valor === 'TAX+') {
                    let resultado = (parseFloat(pantalla.textContent) * 1.1);
                    pantalla.textContent = Number.isInteger(resultado) ? resultado.toString() : resultado.toFixed(2);
                // Maneja el botón 'MC' para borrar la memoria
                } else if (valor === 'MC') {
                    memoriaValor = 0;
                    pantalla.textContent = '0';
                // Maneja el botón 'MR' para mostrar el valor de la memoria
                } else if (valor === 'MR') {
                    pantalla.textContent = memoriaValor.toString();
                // Maneja el botón 'M-' para restar el valor de la pantalla a la memoria
                } else if (valor === 'M-') {
                    memoriaValor -= parseFloat(pantalla.textContent);
                    pantalla.textContent = '0';
                // Maneja el botón 'M+' para sumar el valor de la pantalla a la memoria
                } else if (valor === 'M+') {
                    memoriaValor += parseFloat(pantalla.textContent);
                    pantalla.textContent = '0';
                // Maneja el botón 'x' para la multiplicación
                } else if (valor === 'x') {
                    if (operador) {
                        pantalla.textContent = pantalla.textContent.slice(0, -1) + 'x';
                    } else {
                        pantalla.textContent += 'x';
                    }
                    operador = '*';
                // Maneja el botón '÷' para la división
                } else if (valor === '÷') {
                    if (operador) {
                        pantalla.textContent = pantalla.textContent.slice(0, -1) + '÷';
                    } else {
                        pantalla.textContent += '÷';
                    }
                    operador = '/';
                // Cambia el signo del valor en la pantalla
                } else if (valor === '+/-') {
                    pantalla.textContent = String(-parseFloat(pantalla.textContent));
                // Maneja el botón 'eˣ' para la exponenciación
                } else if (valor === 'eˣ') {
                    memoria = pantalla.textContent;
                    operador = '**';
                    pantalla.textContent += '^';
                // Maneja la entrada de números y otros caracteres
                } else {
                    if (pantalla.textContent === '0' || pantalla.textContent.includes('h') || pantalla.textContent.includes('m') || pantalla.textContent.includes('s')) {
                        pantalla.textContent = valor;
                    } else {
                        pantalla.textContent += valor;
                    }
                }
            }
        });
    });
});

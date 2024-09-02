document.addEventListener('DOMContentLoaded', function() {
    const pantalla = document.querySelector('.pantalla');
    let memoria = '';
    let operador = '';
    let resultado = '';
    let memoriaValor = 0;

    const botones = document.querySelectorAll('#fondocalculadora button');
    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const valor = this.textContent;

            if (pantalla.textContent == "Error!" || pantalla.textContent == "Infinity") {
                pantalla.textContent = "0";
            } else {
                if (valor === 'AC') {
                    pantalla.textContent = '0';
                    memoria = '';
                    operador = '';
                    resultado = '';
                } else if (valor === '←') {
                    if (pantalla.textContent.length == 1) {
                        pantalla.textContent = "0";
                    } else {
                        pantalla.textContent = pantalla.textContent.slice(0, -1);
                    }
                } else if (valor === '=') {
                    try {
                        pantalla.textContent = eval(pantalla.textContent.replace('x', '*').replace('÷', '/'));
                        memoria = pantalla.textContent;
                        operador = '';
                    } catch (error) {
                        pantalla.textContent = "Error!";
                    }
                } else if (valor === 'H/M/S') {
                    let totalSeconds = parseFloat(pantalla.textContent) * 3600; // Convierte horas decimales a segundos
                    let hours = Math.floor(totalSeconds / 3600);
                    totalSeconds %= 3600;
                    let minutes = Math.floor(totalSeconds / 60);
                    let seconds = totalSeconds % 60;
                    pantalla.textContent = `${hours}h ${minutes}m ${seconds}s`;
                } else if (valor === '√') {
                    pantalla.textContent = Math.sqrt(parseFloat(pantalla.textContent));
                } else if (valor === '%') {
                    let resultado = (parseFloat(pantalla.textContent) / 100);
                    pantalla.textContent = Number.isInteger(resultado) ? resultado.toString() : resultado.toFixed(2)
                } else if (valor === 'TAX-') {
                    let resultado = (parseFloat(pantalla.textContent) * 0.9);
                    pantalla.textContent = Number.isInteger(resultado) ? resultado.toString() : resultado.toFixed(2); // Ejemplo: reduce un 10%
                } else if (valor === 'TAX+') {
                    let resultado = (parseFloat(pantalla.textContent) * 1.1);
                    pantalla.textContent = Number.isInteger(resultado) ? resultado.toString() : resultado.toFixed(2); // Ejemplo: aumenta un 10%
                } else if (valor === 'MC') {
                    memoriaValor = 0;
                    pantalla.textContent = '0';
                } else if (valor === 'MR') {
                    pantalla.textContent = memoriaValor.toString();
                } else if (valor === 'M-') {
                    memoriaValor -= parseFloat(pantalla.textContent);
                    pantalla.textContent = '0';
                } else if (valor === 'M+') {
                    memoriaValor += parseFloat(pantalla.textContent);
                    pantalla.textContent = '0';
                } else if (valor === 'x') {
                    if (operador) {
                        pantalla.textContent = pantalla.textContent.slice(0, -1) + 'x';
                    } else {
                        pantalla.textContent += 'x';
                    }
                    operador = '*';
                } else if (valor === '÷') {
                    if (operador) {
                        pantalla.textContent = pantalla.textContent.slice(0, -1) + '÷';
                    } else {
                        pantalla.textContent += '÷';
                    }
                    operador = '/';
                } else if (valor === '+/-') {
                    pantalla.textContent = String(-parseFloat(pantalla.textContent));
                } else if (valor === 'eˣ') {
                    memoria = pantalla.textContent;
                    operador = '**';
                    pantalla.textContent += '^';
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

# Calculadora JavaScript

![](https://github.com/Jithgarm/proyectoInicial/blob/main/proyectoInicialScreenShot.png)

Esta es una calculadora simple hecha con HTML y CSS, con funcionalidades implementadas en JavaScript. A continuación se describen las funciones y características de cada botón de la calculadora.

## Funciones de los Botones

### Botones Básicos

- **AC**: Reinicia la calculadora, borrando todos los valores y la pantalla.
- **←**: Borra el último carácter ingresado en la pantalla.
- **=**: Evalúa la expresión matemática ingresada y muestra el resultado.
- **+/-**: Cambia el signo del número actual en la pantalla.
- **%**: Calcula el porcentaje en el contexto de una operación. Por ejemplo, `100 x 20%` dará `20`.

### Operaciones Matemáticas

- **+**: Suma.
- **-**: Resta.
- **x**: Multiplicación.
- **÷**: División.
- **√**: Calcula la raíz cuadrada del número actual en la pantalla.
- **eˣ**: Calcula la exponenciación del número actual en la pantalla.

### Funciones de Memoria

- **MC**: Borra el valor almacenado en la memoria.
- **MR**: Muestra el valor almacenado en la memoria.
- **M-**: Resta el valor actual en la pantalla del valor almacenado en la memoria.
- **M+**: Suma el valor actual en la pantalla al valor almacenado en la memoria.

### Funciones Adicionales

- **H/M/S**: Convierte el valor en la pantalla de horas decimales a formato `hh:mm:ss`.
- **TAX-**: Reduce el valor en la pantalla en un 10%.
- **TAX+**: Aumenta el valor en la pantalla en un 10%.

## Ejemplo de Uso

1. Para calcular el 20% de 100:
   - Ingrese `100`.
   - Presione `x`.
   - Ingrese `20`.
   - Presione `%`.
   - El resultado será `20`.

2. Para calcular la raíz cuadrada de 16:
   - Ingrese `16`.
   - Presione `√`.
   - El resultado será `4`.

3. Para convertir 2.5 horas a formato `hh:mm:ss`:
   - Ingrese `2.5`.
   - Presione `H/M/S`.
   - El resultado será `2h 30m 0s`.

## Instalación

Para utilizar esta calculadora, simplemente incluya el archivo JavaScript en su proyecto HTML y asegúrese de tener los elementos HTML correspondientes para la pantalla y los botones.

```html
<script src="calculadora.js"></script>

/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   return array[0];

   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
}

function devolverUltimoElemento(array) {
   return array [array.length-1];
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
}

function obtenerLargoDelArray(array) {
   return array.length;
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
}

function incrementarPorUno(array) {
   var arrayNew = array.map((num) => {
      return num +1;
   })
   return arrayNew;

   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
}

function agregarItemAlFinalDelArray(array, elemento) {
   array.push(elemento);
   return array;
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
}

function agregarItemAlComienzoDelArray(array, elemento) {
   array.unshift(elemento);
   return array;
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
}

function dePalabrasAFrase(palabras) {
   var palabrasConcatenadas = palabras.join(" ");
   return palabrasConcatenadas;
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
}

function arrayContiene(array, elemento) {
   var siExiste = array.includes(elemento);
   if (siExiste){return true}
   else{
      return false;
   }
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
}

function agregarNumeros(arrayOfNums) {
   var sumOfNums = 0
   for (let i = 0; i < arrayOfNums.length; i++) {
      const element = arrayOfNums[i];
      sumOfNums += element
   }
   return sumOfNums
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
}

function promedioResultadosTest(resultadosTest) {
   var suma = 0
   for(var i = 0; i<resultadosTest.length; i++) {
     suma = suma + resultadosTest[i]
       } return suma/resultadosTest.length;
 
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
}

function numeroMasGrande(numeros) {
   var buscarmayor = numeros[0];
    for(var i = 1; i < numeros.length; i++) {
      if(numeros[i] > buscarmayor) {
        buscarmayor = numeros[i];
      }
    }
    return buscarmayor;
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
}

function multiplicarArgumentos() {
   var args = Array.from(arguments);
   if(args.length === 0) return 0;
   else if (args.length === 1)return args[0];
   else return args.reduce((x0, x1) => x0 * x1);
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
}

function cuentoElementos(array) {
   var mayorQue = [];
   for(let i =0; i < array.length; i++){
      if(array[i] > 18){
         mayorQue += 1;
      }
   }
   return mayorQue.length;
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
}

function diaDeLaSemana(numeroDeDia) {
   if (numeroDeDia === 1 || numeroDeDia === 7) {
      return "Es fin de semana";
   }
   return "Es dia laboral";
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
}

function empiezaConNueve(num) {
   var numero = num.toFixed()
    if (numero[0] === "9") {
       return true
    }
    return false
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
}

function todosIguales(array) {
   for(let i = 0; i < array.length; i++){
      if(array.length[0] !== array.length[i]){
         return false;
      }
   }
   return true;
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
}

function mesesDelAño(array) {

   let nuevoArray = [];

   for(let i = 0; i < array.length; i++){
      if(array[i].includes("Enero") || array[i].includes("Marzo") || array[i].includes("Noviembre")){
         nuevoArray.push(array[i]);
      }
   }
   if(nuevoArray.length < 3) {
      return "No se encontraron los meses pedidos";
   }
   return nuevoArray;

   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
}

function tablaDelSeis() {
   var tablaResultado = []
   var contador = 0
   var valor = 0
   while (valor < 60) {
      valor = contador * 6
      tablaResultado.push(valor)
      contador++
   }
   return tablaResultado
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
}

function mayorACien(array) {
   var arrayResponse = []
    array.forEach(element => {
       if (element > 100) {
          arrayResponse.push(element)
       }
    });
    return arrayResponse
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   var limite = 10
    var cont = 1
    var arrayResponse = []
    var interrumpido = false
    while (cont <= limite) {
       num += 2
       arrayResponse.push(num)
       cont += 1
       if (num === cont) {
          interrumpido = true
          break
       }
    }
    if (interrumpido === true) {
       return "Se interrumpió la ejecución";
    }
    return arrayResponse
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   var limite = 10
    var cont = 1
    var arrayResponse = []
    while (cont <= limite) {
       if (cont != 5) {
          num += 2
          arrayResponse.push(num)
          cont += 1
       } else {
          cont += 1
          continue
       }
    }
    return arrayResponse
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};

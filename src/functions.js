



//Tanque de gas que entrega un caudal dependiendo del volumen
//resultado = presion = 9.28885 atmosferas, volumen = 70.8038 litros
// function calcularPresionYVolumen(cantidadInicial, cantidadUtilizada, temperatura, moles) {
    
//     // Calcula la cantidad de gas restante en el tanque
//     const cantidadRestante = cantidadInicial - cantidadUtilizada;
    
//     // Calcula la presión del gas utilizando la fórmula de los gases ideales (PV=nRT)
//     const presion = (moles * 8.314 * (temperatura + 273.15)) / cantidadRestante;
    
//     // Calcula el volumen del gas utilizando la fórmula de los gases ideales (PV=nRT)
//     const volumen = (cantidadRestante * 8.314 * (temperatura + 273.15)) / presion;
    
//     // Devuelve la presión y el volumen del gas en un objeto
//     return {
//         presion,
//         volumen
//     };
// }

function calcularPresionYVolumen(capacidadTotal, cantidadInicial, cantidadUtilizada, temperatura, moles) {
    // Calcula la cantidad de gas restante en el tanque
    const cantidadRestante = cantidadInicial - cantidadUtilizada;
    
    // Calcula la presión del gas utilizando la fórmula de los gases ideales (PV=nRT)
    const presion = (moles * 8.314 * (temperatura + 273.15)) / cantidadRestante;
    // console.log("Presion: " + presion)
    
    // Calcula el volumen del gas utilizando la fórmula de los gases ideales (PV=nRT)
    const volumen = (cantidadRestante * 8.314 * (temperatura + 273.15)) / presion;
    // console.log("Volumen: " + volumen)
    
    // Devuelve la presión y el volumen del gas en un objeto
    return {
      presion,
      volumen
    };
  }

  function calcularPresionVolumen(n, T, V1, V2) {
    const R = 8.314; // Constante de los gases ideales en J/mol·K
  
    // Calculamos la presión final utilizando la ley de los gases ideales
    const P2 = (n * R * T) / V2;
  
    // Calculamos la presión inicial utilizando la ley de los gases ideales
    const P1 = (n * R * T) / V1;
  
    // Devolvemos un objeto con los valores de presión y volumen
    return { P1, P2 };
  }
  
  

//Volumen en litros, tiempo en segundos y presion en atm
export function calcularCaudal(tiempo) {
    // Calcula el caudal del gas utilizando la fórmula Q = V * P / t
    //Tiempo en segundos
    //volumen litros
    //presion atm
    
    //cantidadInicial = 50 litros, cantidadUtilizada = 25 litros, temperatura = 25 celcius,  Moles = 2 mol
    const resultado = calcularPresionYVolumen(100,50,25,25,2)
    console.log(resultado.presion)
    console.log(resultado.volumen)

    // const caudal = volumen * presion / tiempo;

    // Devuelve el caudal del gas en litros por segundo
    // return caudal;
}

// El tanque entregara un caudal dependiendo de la posicion de la valvula (La posicion de la valvula es abierta o cerrada)
export function valvulaDelTanqueDeGas(caudal, posicion){
    
    return posicion ? caudal : 0

}

//Presion del tanque 80 a 125 PSI.

// Tuberia con un diametro
// Tuberia por la que pasa un caudal dependiendo de la longitud y el diametro

//diametro en metros, longitud en metros, presion en bar y viscosidad en Pa*s
//Viscosidad del Gas Licuado de Petroleo es de 0.0002 Pa·s
function calcularCaudalManguera(diametro, longitud, presion, viscosidad) {
    // Calcula el área de la sección transversal de la manguera
    const area = Math.PI * Math.pow(diametro / 2, 2);

    // Calcula el factor de fricción utilizando la ecuación de Darcy-Weisbach
    const factorFriccion = 64 / Math.pow((viscosidad / diametro), 0.16);

    // Calcula la velocidad del fluido utilizando la ecuación de Bernoulli
    const velocidad = Math.sqrt((2 * presion) / (factorFriccion * longitud / diametro + 1));

    // Calcula el caudal del fluido utilizando el área de la sección transversal y la velocidad del fluido
    const caudal = area * velocidad;

    // Devuelve el caudal del fluido en metros cubicos por segundos
    return caudal;
}



// Estufa que recibe un caudal
// Estufa con 5 posiciones y dependiendo de la posicion la temperatura aumenta o disminuye
// Cada posicion entrega una temperatura dependiendo del caudal
export function estufa(caudal, posicion){
    
    if(posicion ==  1){
        // return caudal
    }else if(posicion == 2){
        
    }else if(posicoion == 3){

    }else if(posicion == 4){

    }else if(posicion == 5){

    }

}




// Estufa que tiene 5 posiciones y dependiendo de la posicion y la cantidad de gas que recibe el fuego aumenta o disminuye
// Un recipiente con un liquido que cambia de volumen y este liquido tiene un punto de ebullicion que dependiendo del fuego se toma mas o menos tiempo
// Resultado final es el tiempo exacto en el que el liquido empezara a hervir



  
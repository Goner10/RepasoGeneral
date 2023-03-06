//BUCLES

//Imprimir los números del 21 al 34 en la consola.

for (let i = 21; i <= 34; i++) {
    console.log(i);
  }


//Sumar los números del 1 al 10 y mostrar el resultado en la consola.

let suma = 0;
for(let i = 0; i<=10; i++){
    suma +=i
}
console.log(suma)

//Dado un array de números, imprimir en la consola la suma de todos los números.
const num = [1, 2, 3, 4, 5];
let sumita = 0;

for(i = 0; i < num.length; i++){
    sumita += num[i]
}
console.log(sumita)


//Dado un número, encontrar su factorial.

function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    }
    let result = num;
    for (let i = num - 1; i >= 1; i--) {
      result *= i;
    }
    return result;
  }
console.log(factorial(10))


//Dado un array de números, imprimir en la consola solo los números impares.
 
const impares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = 0; i < impares.length; i++){
    if(impares[i] % 2 !== 0){
        console.log(impares[i])
    }
}

//Dado un array de objetos con propiedades "nombre" y "edad", imprimir en la consola solo los nombres de las personas mayores de 18 años.

const personas = [{nombre: 'Gonzalo', edad: 26} ,{nombre:'Paco', edad:100} ,{nombre:'Pedro', edad:12} , {nombre:'Pepe', edad:38} ,{nombre:'Pablo', edad: 9}]

for(let i = 0; i< personas.length; i++){
  if(personas[i].edad > 18){
    console.log(personas[i].nombre)
  }
}


// Utiliza la siguiente array para resolver los próximos ejercicios:

let animales = [
  {
    nombre: "León",
    especie: "Felino",
    edad: 6,
  },
  {
    nombre: "Cebra",
    especie: "Herbívoro",
    edad: 4,
  },
  {
    nombre: "Tigre",
    especie: "Felino",
    edad: 3,
  },
  {
    nombre: "Elefante",
    especie: "Herbívoro",
    edad: 8,
  },
  {
    nombre: "Jirafa",
    especie: "Herbívoro",
    edad: 5,
  },
  {
    nombre: "Oso",
    especie: "Omnívoro",
    edad: 2,
  },
  {
    nombre: "Pingüino",
    especie: "Ave",
    edad: 1,
  },
];

// Crea un array con los animales que son felinos y mayores de 4 años. No utilices el método filter de las arrays y muéstralo por consola.
let felino = []

for (const animal of animales) {
    if(animal.especie == "Felino" && animal.edad > 4){
        felino.push(animal)
    }
}
console.log(felino)

// Crea un array con los animales que son herbívoros y tienen una edad par. No utilices el método filter de las arrays y muéstralo por consola.
let herbivoros = []

for (const animal of animales) {
        if(animal.especie == "Herbívoro" && animal.edad % 2 == 0){
            herbivoros.push(animal)
        }
    }
console.log(herbivoros) 
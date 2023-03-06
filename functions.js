//Crea una función llamada eliminarDuplicados(array) que reciba como parámetro un array de elementos y devuelva un nuevo array con los elementos únicos, es decir, sin elementos duplicados. Puedes utilizar un ciclo for...of para recorrer el array original.


const arr = [1, 2, 4, 4, 10, 10, 7, 8, 8, 9, 3]

function eliminarDuplicados(array){
    let nuevoArray = []
    for(let element of array){
        if(!nuevoArray.includes(element)){
            nuevoArray.push(element)
        }
    }
    return nuevoArray
}
console.log(eliminarDuplicados(arr))

//Crea una función llamada sumarElementos(array) que reciba como parámetro un array de números y devuelva la suma de todos sus elementos. Puedes utilizar un ciclo for...of para recorrer el array y sumar sus elementos.


const sumando = [1, 2, 3, 4, 5]
function sumarElementos(arr){
    let resultado = 0
    for(const num of sumando){
        resultado += num
    }
    return resultado
}
console.log(sumarElementos())
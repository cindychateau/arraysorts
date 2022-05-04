/*
 * 
 * Función para dividir arreglos
 * 
arr = [10, 5, 8, 1]
mitad = 2
izq = [10, 5]
der = [8, 1]
izqDiv = mergeSort([10, 5]) -> [5, 10]
derDiv = mergeSort([8, 1]) ->[1, 8]
merge([5, 10], [1, 8]) -> [1, 5, 8, 10]
RETURN [1, 5, 8, 10]

mergeSort([10,5])
arr = [10, 5]
mitad = 1
izq = 10
der = 5
izqDiv = mergeSort([10]) -> [10]
derDiv = mergeSort([5]) ->[5]
merge([10], [5]) -> [5, 10]

mergeSort([10])
RETURN [10]

mergeSort([5])
RETURN [5]

mergeSort([8, 1])
arr = [8, 1]
mitad = 1
izq = [8]
der = [1]
izqDiv = mergeSort([8]) -> [8]
derDiv = mergeSort([1]) -> [1]
merge([8], [1]) -> [1, 8]

mergeSort([8])
RETURN [8]

mergeSort([1])
RETURN [1]
 * 
 */
function mergeSort(arr) {

    if(arr.length <= 1){
        return arr;
    } else {
        let mitad = parseInt(arr.length / 2); //No sea con decimales
        let izq = arr.splice(0, mitad); //Dividimos del 0 a la mitad
        let der = arr;

        let izqDiv = mergeSort(izq);
        let derDiv = mergeSort(der);
        
        return merge(izqDiv, derDiv);
    }


}
/**
 * 
merge([10], [5])
izq = [10]
der = [5]
arrOrdenado = []

arrOrdenado = [5]
der = []
RETURN [5, 10]

merge([8], [1])
izq = [8]
der = [1]
arrOrdenado = []

arrOrdenado = [1]
der = []
RETURN [1, 8]

merge([5, 10], [1, 8])
izq = [5, 10]
der = [1, 8]
arrOrdenado = []

arrOrdenado = [1]
izq = [5, 10]
der = [8]
arrOrdenado = [1, 5]
izq = [10]
der = [8]
arrOrdenado = [1, 5, 8]
izq = [10]
der = []

RETURN [1, 5, 8, 10]

 */
function merge(izq, der) {
    let arrOrdenado = [];

    //Siempre y cuando NO esté vacío ninguno
    while(izq.length && der.length){

        if(izq[0] < der[0]){
            arrOrdenado.push( izq.shift() ); //Obtenemos el primer elemento del lado izq y lo eliminamos
        } else {
            arrOrdenado.push( der.shift() ); //Obtenemos el primer elemento del lado der y lo eliminamos
        }

    }

    return [...arrOrdenado, ...izq, ...der]; //Creamos un nuevo arreglo con el arreglo ordenado y lo que sobró del otro arreglo

}

let arreglo = [10, 5, 8, 1];
//console.log(mergeSort(arreglo));

module.exports = mergeSort;
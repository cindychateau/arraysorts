/*
 * 
quickSort([3, 4, 2, 12, 10, 1])
arr = [3, 4, 2, 12, 10, 1]
pivote = 3
izq = [2, 1]
der = [4, 12, 10]
izqOrdenado = quickSort([2, 1]) -> [1, 2]
derOrdenado = quickSort([4, 12, 10]) -> [4, 10, 12]
RETURN [1, 2, 3, 4, 10, 12] ***

quickSort([2, 1])
arr = [2, 1]
pivote = 2
izq = [1]
der = []
izqOrdenado = quickSort([1]) -> [1]
derOrdenado = quickSort([]) -> []
RETURN [1, 2]

quickSort([1])
arr = [1]
RETURN [1]

quickSort([])
arr = []
RETURN []

quickSort([4, 12, 10])
arr = [4, 12, 10]
pivote = 4
izq = []
der = [12, 10]
izqOrdenado = quickSort([]) -> []
derOrdenado = quickSort([12, 10]) -> [10, 12]
RETURN [4, 10, 12]

quickSort([12, 10])
arr = [12, 10]
pivote = 12
izq = [10]
der = []
izqOrdenado = quickSort([10]) -> [10]
derOrdenado = quickSort([]) -> []
RETURN [10, 12]

 */


function quickSort(arr) {
    if(arr.length <= 1){
        return arr;
    } else {
        let pivote = arr[0]; //Obtenemos como pivote el primer elemento
        let izq = [];
        let der = [];

        for(let i=1; i<arr.length; i++){
            if(arr[i] <= pivote){
                izq.push( arr[i] );
            } else {
                der.push( arr[i] );
            }
        }

        let izqOrdenado = quickSort(izq);
        let derOrdenado = quickSort(der);

        return [...izqOrdenado, pivote, ...derOrdenado];

    }
}

let arreglo = [3, 4, 2, 12, 10, 1];

console.log(quickSort(arreglo));
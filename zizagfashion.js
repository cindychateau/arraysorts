const mergeSort = require( './mergeSort' );
/*
 * nums = [1, 3, 5, 8, 10, 7]
 * arregloOrdenado = [1, 3, 5, 7, 8, 10]
 * i = 1 - 5
 * aux = 3
 * arregloOrdenado[1] = arregloOrdenado[2] -> 5
 * arregloOrdenado[2] = 3
 * arregloOrdenado = [1, 5, 3, 7, 8, 10]
 * 
 * i = 3
 * aux = 7
 * arregloOrdenado[3] = 8
 * arregloOrdenado[4] = 7
 * arregloOrdenado = [1, 5, 3, 8, 7, 10]
 * 
 * i = 5
 */
function zigZagFashion( nums ){
    let arregloOrdenado = mergeSort( nums );
    console.log(arregloOrdenado);
    for( let i = 1; i < arregloOrdenado.length - 1; i += 2 ){
        let aux = arregloOrdenado[i];
        arregloOrdenado[i] = arregloOrdenado[i + 1];
        arregloOrdenado[i + 1] = aux;
    }

    return arregloOrdenado;
}

let nums = [1, 3, 5, 8, 10, 7];
console.log( zigZagFashion( nums ) );
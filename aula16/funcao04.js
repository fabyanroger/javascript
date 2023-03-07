//MANEIRA TRADICIONAL
// resutado de uma fatoração

function fatorial(n) {
    let fat = 1
    for(let cont=n; cont>1; cont--) {
        fat *= cont
        //é equivalente dizer
        //fat = fat * cont
    }
    return fat
}

console.log(fatorial(5))
let num = [10, 8, 2, 9, 3]

//incluiu o valor 1
num.push(1)

//ordenou em crescente
num.sort()

//tela
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

//pesquisa o valor X no vetor
let pos = num.indexOf(7)

if (pos == -1) {
    console.log('O valor não existe')
} else {
    console.log(`O valor está na posição ${pos}`)
}

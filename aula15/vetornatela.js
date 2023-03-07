let vetor = [3, 2, 4]

//console.log(`O nosso vetor é ${num}`)

//adicionando o valor 20 no final do vetor
vetor.push(7)

//colocando a array em ordem crescente
vetor.sort()

//tela
console.log(vetor)
console.log(`Tamanho da array: ${vetor.length} elementos`)
console.log(`O primeiro valor da array é: ${vetor[0]}\n\n`)

//maneira simplificada de usar for em JS
for (let cont in vetor) {
    console.log(`Posição ${cont} do vetor tem o valor [${vetor[cont]}]`)
}

//para buscar um valor dentro do vetor
vetor.indexOf()

/*
for(let cont=0; cont <vetor.length; cont++) {
    console.log(`Posição ${cont} do vetor tem o valor [${vetor[cont]}]`)
}*/

/*
num.length ==> saber o comprimento da array somando a quantidade de elementos, length não é um método, é um atributo

num.sort() ==> deixa os valores da array em ordem crescente

*/



//adicionando um valor extra de forma manual em um vetor
//num[3] = 20

//adicionando um valor extra de forma automática sem preocupar em saber qual a última posição do vetor
//num.push(20)
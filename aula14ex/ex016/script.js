function contar() {
    let inicio = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let result = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        result.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')
    } else {
        result.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }

        if (i < f) {
            //contagem crescente
            for (let c = 1; c <= f; c += p) {
                result.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //contagem decrescente
            for (let c = i; c >= f; c-= p) {
                result.innerHTML += `${c} \u{1f449}`
            }
        }
        result.innerHTML += `\u{1f3c1}`
    }
}
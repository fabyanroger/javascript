function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = 'homem'
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if ( idade >=0 && idade < 10) {
                //criaça
                img.setAttribute('src', 'imagens/homem-crianca.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/homem-jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if ( idade >=0 && idade < 10) {
                //criaça
                img.setAttribute('src', 'imagens/mulher-crianca.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/mulher-jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/mulher-idosa.png')
            }
        } 

        //alinhando texto direto do js
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var date = new Date()
    var hora = date.getHours()
    var hora = 18
    msg.innerHTML = (`Agora são ${hora} horas.`)
    
    if (hora >= 0 && hora < 12) {
        //bom dia
        msg.innerHTML += 'Tenha um bom dia!'
        img.src =  'imagens/foto-dia.png'
        document.body.style.background = '#87b8ce'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        msg.innerHTML += 'Tenha uma boa tarde!'
        img.src = 'imagens/foto-tarde.png'
        document.body.style.background = '#fac28e'
    } else {
        //boa noite
        msg.innerHTML += 'Tenha uma boa noite!'
        img.src = 'imagens/foto-noite.png'
        document.body.style.background = '#1e2435'
    }
}

function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12) {
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#f8ef6a'
    } else if (hora >=12 && hora < 18) {
        //BOA TARDE!
        document.body.style.background = '#cc6235'
        img.src = 'fototarde.png'
    } else {
       //BOA NOITE! 
       img.src = 'fotonoite.png'
       document.body.style.background = '#37465f'
    }
}

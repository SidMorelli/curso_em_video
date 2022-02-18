function carregar(){
    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'img/manha.jpg' 
        document.body.style.background = '#9bb6d4'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#256d6a'
    } else {
        //boa noite
        img.src = 'img/noite.jpg'
        document.body.style.background = '#705d59'
    }
    

}

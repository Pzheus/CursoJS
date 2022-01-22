


function carregar() {

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora<12){
        //BOM DIA
        img.src='manha.png'
        document.body.style.background ="#e2cd9f"

    }else if(hora >= 12 && hora < 18) {
        //BOA TARDE
        document.body.style.background ="#b9846f"
        img.src='tarde.png'
    }else {
        //BOA NOITE
        document.body.style.background = "#515154"
        img.src='noite.png'
    }


}

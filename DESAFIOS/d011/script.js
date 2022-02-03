function verificar() {
    var ano = prompt("Qual o ano que deseja verificar?")
    var resultado = document.getElementById("res")

    if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
        resultado.innerHTML = (`
        
        <div id="verde"><p><strong>Analisando o ano de ${ano}...</strong></p>
        
        <p> O ano de ${ano} <mark style="background-color:rgba(0,255,0,0.500); "><strong>É BISSEXTO</strong></mark> &#9989; </p></div>
        
        `)
    } else {
        resultado.innerHTML = (`
        
        <div id="vermelho"><p><strong>Analisando o ano de ${ano}...</strong></p>
        
        <p> O ano de ${ano} <mark style="background-color:rgba(255,0,0,0.500); "><strong>NÃO É BISSEXTO</strong></mark> &#10060; </p></div>
        
        `)
    }


}
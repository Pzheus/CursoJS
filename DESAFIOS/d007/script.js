function converter() {
    var cotação = prompt("Quanto está a cotação do dolar hoje?")
    var carteira = prompt("Quanto você tem na carteira?")
    var resultado = document.getElementById("res")

    resultado.innerHTML = (`<p> Hoje o dólar está R$${cotação}, ...</p>
 É você tem US$${Number(carteira)/cotação} na carteira!  <br>`)
}
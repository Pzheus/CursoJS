function desconto() {
    var produto = prompt("Qual o produto que você está comprando?")
    var preço = prompt(`Qual o preço do ${produto}?`)
    var resultado = document.getElementById("res")

    resultado.innerHTML = (` <p> O preço original do ${produto} era de ${preço}, ... <br><br>
    
    Você acaba de ganhar R$${Number(preço)/10} de desconto (-10%) <br><br>
    
    No fim, você vai pagar R$${Number(preço)-Number(preço)/10} no ${produto}.</p>
    `)
}
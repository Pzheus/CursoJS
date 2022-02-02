function comprar(){
    var produto = prompt("Qual o produto que deseja comrpar?")
    var preco = prompt("Qual o valor do produto que deseja comprar? (em R$)")
    var dinheiro = prompt("Qual o valor em cedúlas que deseja pagar?")

    var troco = Number(dinheiro) - Number(preco)

    alert(`
    Você comprou ${produto} que custou R$${preco},00 
    Contamos R$${dinheiro},00 em dinheiro é o seu troco será de R$${troco},00 
    Volte Sempre!`
    )
}
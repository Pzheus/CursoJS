function reajuste() {
    var nome = prompt("Qual o nome do funcionário?")
    var salario = prompt(`Qual o salário de ${nome}? (em R$)`)
    var porcentagem = prompt(`O salário de ${nome} vai ser reajustado para qual procentagem? (valor em %)`)
    var resultado = document.getElementById("res")

    resultado.innerHTML = (`<p><strong>${nome} recebeu um aumento salarial!, ... </strong><br><br>
    
    O salário atual era de R$${salario}<br><br>
    
    Com um aumento de ${porcentagem}%, o salário vai aumentar R$${Number(salario)/Number(porcentagem)} no próximo mês.<br><br>
    
    E a partir daí, ${nome} vai passar a ganhar R$${Number(salario)/Number(porcentagem)+Number(salario)} </p>`)
}
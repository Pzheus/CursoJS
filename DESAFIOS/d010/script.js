function calcular() {
    var valora = prompt("Qual o valor da variavél A")
    var valorb = prompt("Qual o valor da variavél B")
    var valorc = prompt("Qual o valor da variavél C")

    var resultado = document.getElementById("res")

    resultado.innerHTML = (`A equaçãoa atual é <strong>${valora}x² + ${valorb}x + ${valorc} = 0</strong><br><br>

    O cálculo realizado será <strong>&#x394 = ${valorb}² - 4 . ${valora} . ${valorc}</strong><br><br>

    O valor calculado foi &#x394 = ${Number(valorb)*Number(valorb)-4*Number(valora)*Number(valorc)}
    `)
}
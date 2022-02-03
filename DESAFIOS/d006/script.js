function converter() {
    var temp = prompt("Digite a temperatura em °C (Celsius)")
    var resultado = document.getElementById("res")

    resultado.innerHTML = (`<p> A temperatura de ${temp}°C, corresponde a ...</p>
${273.15+Number(temp)}°K (Kelvin)<br>
${32+(Number(temp)*9/5)}°F (Fahrenheit)<br>
`)
}
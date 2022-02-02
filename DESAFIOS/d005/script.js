function converter(){
var metros = prompt("Digite a distância em metros")
var resultado = document.getElementById("res")

resultado.innerHTML = (`<p> A distância de ${metros} metros, corresponde a ...</p>
${metros/1000} quilômetros (Km) <br>
${metros/100} hectômetros (Hm) <br>
${metros/10} decâmetros (Dam) <br>
${metros*10} decímetros (dm) <br>
${metros*100} centímetros (cm) <br>
${metros*100} milímetros (mm)`)
}
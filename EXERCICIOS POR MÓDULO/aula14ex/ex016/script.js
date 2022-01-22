function verificar(){

    var inicio = document.getElementById('numinicio')
    var fim = document.getElementById('numfim')
    var i = document.getElementById('numpasso')
    var res = document.getElementById('res')


if(inicio.value.length == 0 || fim.value.length == 0 || i.value.length == 0){
    alert("[ERRO] Digite um número válido")
}else{
    var inicioo = Number(inicio.value)
    var fimm = Number(fim.value)
    var ii = Number(i.value)
        if(inicioo < fimm){
            res.innerHTML += 'Contando:'
            for(var c = inicioo; c <= fimm; c += ii){ //Sempre declarar a variavel de controle e utilizar ela como saida, pois ela recebe o incremento 
            res.innerHTML += `${c} \u{1F449}`  // https://unicode.org/emoji/charts/full-emoji-list.htmllert="[ERRO] Digite um número válido"    
            } 
        }else{
            res.innerHTML += 'Contando:'
            for(var c = inicioo; c >= fimm; c -= ii){
            res.innerHTML += `${c} \u{1F449}`
            }
         }
         res.innerHTML += `\u{1F645}`
        }
}

var num = document.getElementById('numero')
var lista = document.getElementById('lista')
var res =  document.getElementById('res')
var valores = []

function Num(n){
    if(Number(n) >= 1 && Number(n) <= 100 ){ 
        return true
    }else{
        return false
}   }  


function Lista(n,l){

    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}


function analisar(){

    if(Num(num.value) && !Lista(num.value, valores)){

        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    }else{

        alert('Valor inválido ou já encontrado na lista')


      }
      num.value = ''
      num.focus()

}

function finalizar(){

    if(valores.length == 0){
        alert('Adicione algum valores antes de finalizar')
    }else{
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var média = 0

        for(var pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor =  valores[pos]
        }

        média = soma/total

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}`
        res.innerHTML += `<p> O menor valo informado foi ${menor}`
        res.innerHTML += `<p> A soma de todos o valores é ${soma}`
        res.innerHTML += `<p> A média de todos dos valores é ${média}`
    }

}

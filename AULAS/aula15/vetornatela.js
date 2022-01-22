var valores = [8, 1 , 7 , 4, 2 ,9]

/*for(var c=0; c<= valores.length;c++){
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}*/

for(var c in valores){
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}


//num.indexOf(7) (Localiza o valor atribuido ao indice)
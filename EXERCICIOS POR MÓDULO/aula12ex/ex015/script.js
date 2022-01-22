


function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    
    if(fano.value.length == 0 || fano.value > ano){
        alert("[ERRO] Verifique os dados e tente novamente")
    } else{
        var fsex = document.getElementsByName("radsex")
        var idade =  ano - Number(fano.value)
        var gênero = " "
        var img = document.getElementById('foto')

        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade>=0 && idade <10){
                //criança
                img.setAttribute('src', 'homemcriança.png')
            }   else if(idade >=10 && idade <21){
                //jovem
                img.setAttribute('src', 'homemjovem.png')
                }else if(idade >=21 && idade <50){
                //adulto
                img.setAttribute('src', 'homemadulto.png')
                }else{
                //idoso
                img.setAttribute('src', 'homemidoso.png')
                }
        
        }else if(fsex[1].checked){
            gênero='Mulher'
            
            if(idade>=0 && idade <10){
                //criança
                img.setAttribute('src', 'mulhercriança.png')
            }   else if(idade >=10 && idade <21){
                //jovem
                img.setAttribute('src', 'mulherjovem.png')
            }   else if(idade >=21 && idade <50){
                //adulto
                img.setAttribute('src', 'mulheradulta.png')
            }   else{
                //idoso
                img.setAttribute('src', 'mulheridosa.png')
            }

        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }



}

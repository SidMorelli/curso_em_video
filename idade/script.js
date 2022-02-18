function verificar() {
data = new Date()
ano = data.getFullYear()
fano = document.getElementById('txtano')
res = document.querySelector('div#res')
if (fano.value.length == 0 || fano.value > ano ) {
    window.alert('Verifique os dados e tente novamente!')
} else {
        fsex = document.getElementsByName('radsex')  
        idade = ano - Number(fano.value)    
        genero = ''
        img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade <14) {
                //Criança
                img.setAttribute('src', '/img/crianca/c_masc.png')
            } else if (idade < 24){
                //joven
                img.setAttribute('src', '/img/joven/j_masc.png')
            } else if (idade < 64) {
                //Adulto
                img.setAttribute('src', '/img/adulto/a_masc.png')
            } else  {
                //Idoso
                img.setAttribute('src', '/img/idoso/i_masc.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade <14) {
                //Criança
                img.setAttribute('src', '/img/crianca/c_fem.png')
            } else if (idade < 24){
                //joven
                img.setAttribute('src', '/img/joven/j_fem.png')
            } else if (idade < 64) {
                //Adulto
                img.setAttribute('src', '/img/adulto/a_fem.png')
            } else  {
                //Idoso
                img.setAttribute('src', '/img/idoso/i_fem.png')
            }

        }

    
        res.innerHTML = `Verificado: ${genero} com ${idade} anos`
        res.appendChild(img)
        
    
    
}

}
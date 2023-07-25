function somar() {
    var media = document.getElementById ('media')
    var br1 = document.getElementById ('barra1')
    var br2 = document.getElementById ('barra2')
    var br3 = document.getElementById ('barra3')
    var br1 = Number (br1.value)
    var br2 = Number (br2.value)
    var br3 = Number (br3.value)
    var valor = (br1 * 2 + br2 * 3 + br3 * 5) / 10
    document.getElementById ('media').innerHTML = valor
    var resultado = ( valor >= 60 ? 'você atingiu a média!' : 'Você não atingiu a média!')
    document.getElementById ('aprovado-reprovado').innerHTML = resultado
    if (valor >= 60) {
    
    document.getElementById ('media').style.color = 'green'
    document.getElementById ('aprovado-reprovado').style.color = 'green'
    }
    else {
    
    document.getElementById ('media').style.color = 'red'
    document.getElementById ('aprovado-reprovado').style.color = 'red'
    }
    
    }
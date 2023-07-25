function clicou() {
    var media = document.getElementById ('media')
    var b1 = document.getElementById ('barra1')
    var b2 = document.getElementById ('barra2')
    var b1 = Number (b1.value)
    var b2 = Number (b2.value)
    var media = String (media.String)
    var valor = [600 - (b1 * 2 + b2 * 3)] / 5
    document.getElementById ('media').innerHTML = valor
    document.getElementById ('nota-nescessaria').innerHTML = 'Nota nescessária'
    }
function carregar() {
    var msg = windows.document.getElementById('msg')
    var img = windows.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'Agora são $(hora) horas.'
}

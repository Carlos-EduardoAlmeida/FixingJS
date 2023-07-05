var tex = document.getElementById("texto")
var imag = document.getElementById("imagem")
var hor = new Date()
var horarioAtual = hor.getHours()
var minutosAtual = hor.getMinutes()

tex.innerHTML = `No momento são <strong>${horarioAtual}</strong> horas` 

if (horarioAtual >= 18){
    imag.src ="./imagens/noite.png"
    document.body.style.background = "#181866"
}else if (horarioAtual >= 12){
    imag.src ="./imagens/tarde.png"
    document.body.style.background = "#d69f4c"
}else{
    imag.src ="./imagens/imgmorning.png"
    document.body.style.background = "#75aadb"
}
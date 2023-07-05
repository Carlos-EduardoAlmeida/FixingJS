function verificar(){
    var data = new Date()
    var anoatual = data.getFullYear()
    var datanasc = document.getElementById("anonasc")
    var resp = document.querySelector("div#resp")

    if( datanasc.value.length == 0 || datanasc.value > anoatual){
        window.alert("[Erro]verifique as informações")
    }else{
        var dsexo = document.getElementsByName("sexo")
        var idade = anoatual - Number(datanasc.value)
        var genero = ""

        if (dsexo[0].checked){
            genero = "Homem"
        }else{
            genero = "Mulher"
        }

        
        resp.innerHTML = (`<p>${genero} com ${idade} anos</p>`)
    }
}
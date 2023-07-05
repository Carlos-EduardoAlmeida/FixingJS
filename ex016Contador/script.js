function executar(){
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var resp = document.getElementById("resp")


    if (Number(inicio.value) == 0 || Number(fim.value) == 0){
        alert("Impossível contar, insira os valores")
    }else{
        var p = Number(passo.value)
        var i = Number(inicio.value)
        var f = Number(fim.value)
        if(passo.value == 0){
            alert("Não foi inserido um valor Passo, iremos considerar como 1")
            p = 1
        }
        resp.innerHTML += `Sua resposta: `
        for(var c = i ;c <= f ; c += p){
        
            resp.innerHTML += ` ${c} ->`
        
        }
        resp.innerHTML += `FIM`
        
    }

    
}
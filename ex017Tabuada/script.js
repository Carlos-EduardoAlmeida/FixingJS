function executar(){
    var num = document.getElementById("num")
    var tabela = document.querySelector("select#tabela")

    var n = Number(num.value)
    let c = 1

    tabela.innerHTML = ""
    while(c<=10){
        let item = document.createElement("option")
        let mult = n * c
        item.text = `${n} x ${c} = ${mult}`
        tabela.appendChild(item)
        //tabela.innerHTML += `<td>${n} x ${c} = ${mult}</td>`
        c++
    }
}
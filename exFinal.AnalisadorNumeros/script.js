var lista = document.querySelector("select#lista")
var array = []
var soma = 0

function adicionar(){
    var numtxt = document.getElementById("numtxt")
    var num = Number(numtxt.value)

    if(num < 1 || num > 100 || array.indexOf(num) >= 0){
        alert("Valor não inserido ou fora dos limites, favor inserir corretamente")
    }else{
        resp.innerHTML = ""
        var item = document.createElement("option") //cria o elemento
        item.text = `Valor ${num} adicionado` //define o texto do elemento
        lista.appendChild(item) //adiciona o elemento
        array.push(num)
        soma += num
    }
}

function executar(){
    array.sort()
    if(array.length < 1 ){
        alert("Não foi possível calcular pois não há valores inseridos")
    }else{
        var resp = document.getElementById("resp")

        resp.innerHTML = `Ao todo há ${array.length} número(s) cadastrado(s)`
        resp.innerHTML += `<br>O maior valor inserido foi ${array[array.length - 1]}`
        resp.innerHTML += `<br>O menor valor inserido foi ${array[0]}`
        resp.innerHTML += `<br>A soma de todos os valores é ${soma}`
        resp.innerHTML += `<br>A média dos valores digitados é ${soma/array.length}`
    }
}
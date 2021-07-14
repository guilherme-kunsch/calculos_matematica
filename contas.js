
function somar() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `O resultado da soma é <strong>${s}</strong>`
}

function subtrair() {
    var tn1 = document.getElementById('txtn3')
    var tn2 = document.getElementById('txtn4')
    var res = document.getElementById('resu')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var x = n1 - n2
    res.innerHTML = `O resultado da subtração é <strong>${x}</strong>`
}

function dividir() {
    var tn1 = document.getElementById('txtn5')
    var tn2 = document.getElementById('txtn6')
    var resul = document.getElementById('resul')
    var n1 = Number(tn1.value) //converter para número, antes ia retornar como string
    var n2 = Number(tn2.value)
    var y = n1 / n2
    resul.innerHTML = `O resultado da divisão é <strong>${y}</strong>`
}

function multiplicar() {
    var tn1 = document.getElementById('txtn7')
    var tn2 = document.getElementById('txtn8')
    var result = document.getElementById('result')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var m = n1 * n2
    result.innerHTML = `O resultado da multiplicação é <strong>${m}</strong>`

}

function modulo() {
    var tn1 = document.getElementById('txtn9')
    var tn2 = document.getElementById('txtn10')
    var resulta = document.getElementById('resulta')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var r = n1 % n2
    resulta.innerHTML = `O resultado do resto da divisão é <strong>${r}</strong>`
}

function potencia() {
    var tn1 = document.getElementById('txtn11')
    var tn2 = document.getElementById('txtn12')
    var resulta = document.getElementById('resultad')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var e = n1 ** n2
    resultad.innerHTML = `O resultado da potência é <strong>${e}</strong`
}

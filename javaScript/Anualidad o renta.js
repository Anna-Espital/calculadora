var formulario = document.forms.formulario_anualidad
var resultado = document.getElementById("res_anualidad o renta")


formulario.renta.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV



function calcularAV() {
    let r = parseFloat(formulario.renta.value)
    let n = parseFloat(formulario.tiempo.value)
    let i = parseFloat((formulario.interes.value)/100)
    let total = (i*((1+i)**n))/(((1+i)**n)-1)*r

    resultado.innerHTML = total.toFixed(2)
    console.log(total)
}
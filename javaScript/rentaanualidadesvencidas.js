var formulario = document.forms.formulario_rentaAnualidades_Vencidas
var resultado = document.getElementById("res-rentaAnualidades-vencidas")

formulario.monto.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let S = parseFloat(formulario.monto.value)
    let n = parseFloat(formulario.tiempo.value)
    let i = parseFloat((formulario.interes.value)/100)
    let total = S*(i/(((1+i)**n)-1))


    resultado.innerHTML = total.toFixed(2)
}
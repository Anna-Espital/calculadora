var formulario = document.forms.formulario_anulidadesAnti
var resultado = document.getElementById("res-Anualidad_Anticipada")

formulario.renta.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV
formulario.capitalizacion.oninput = calcularAV


function calcularAV() {
    let r = parseFloat(formulario.renta.value)
    let n = parseFloat(formulario.tiempo.value)
    let m = parseFloat(formulario.capitalizacion.value)
    let i = parseFloat((formulario.interes.value)/100)
    let total = r*(((1+(i/m))**m)*((1+(i/m)/(i/m))**(m*n)-1))*(((i/m)(1+(i/m))**m)-1)

    
    resultado.innerHTML = total.toFixed(2)
}           
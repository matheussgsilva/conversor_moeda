function Converter() {
    var valorInserido = parseFloat(document.getElementById("valor").value)
    var moedaInserida = document.getElementById("select").value
    var moedaResultado = document.getElementById("moedaResultado").value
    var resultado = document.getElementById("resultado")
    
    if (moedaInserida == 0 || moedaResultado == 0){
        window.alert("Por favor escolha uma moeda")
    } else if (moedaInserida == "real") {
        if (moedaResultado == "real") {
            window.alert("As moedas escolhidas devem ser diferentes")
        } else if (moedaResultado == "dolar") {
            resultado.value = valorInserido / 5
        } else {
            resultado.innerText = valorInserido / 6
        }
    } else if (moedaInserida == "dolar") {
        if (moedaResultado == "dolar") {
            window.alert("As moedas escolhidas devem ser diferentes")
        } else if (moedaResultado == "real") {
            resultado.innerText = valorInserido * 5
        } else {
            resultado.innerText = valorInserido * 0.8532
        }
    } else {
        if (moedaResultado == "euro") {
            window.alert("As moedas escolhidas devem ser diferentes")
        } else if (moedaResultado == "real") {
            resultado.innerText = valorInserido * 6
        } else {
            resultado.innerText = valorInserido / 0.8532
        }
    }
}
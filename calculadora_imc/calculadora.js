document.querySelector("#calcular").addEventListener("click", function () {
    const peso = document.querySelector("#peso").value;
    const altura = document.querySelector("#altura").value;
    const imc = calcularIMC(peso, altura);

    let clasificacion_peso;
    let color;
    let resultado = imc.toFixed(1);

    if (resultado < 18.5) {
        //Bajo peso
        clasificacion_peso = "Bajo peso";
        color = "#1e91d0";
    } else if (resultado >= 18.5 && resultado <= 24.9) {
        //Adecuado
        clasificacion_peso = "Adecuado";
        color = "#59b5e8";
    } else if (resultado >= 25 && resultado <= 29.9) {
        //Sobrepeso
        clasificacion_peso = "Sobrepeso";
        color = "#2fa147";
    } else if (resultado >= 30 && resultado <= 34.9) {
        //Obesidad 1
        clasificacion_peso = "Obesidad 1";
        color = "#f4cd34";
    } else if (resultado >= 35 && resultado <= 39.9) {
        //Obesidad 2
        clasificacion_peso = "Obesidad 2";
        color = "#f7a717";
    } else if (resultado >= 40) {
        //Obesidad Mórbida
        clasificacion_peso = "Obesidad mórbida";
        color = "#d4212b";
    }

    document.querySelector("#resultado").innerHTML = resultado + " - " + clasificacion_peso;

    document.querySelector("#calculadora").style.backgroundColor = color;

    //document.querySelector("#resultado").innerHTML=imc.toFixed(1) + "-" + clasificacion_peso;
});



function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}
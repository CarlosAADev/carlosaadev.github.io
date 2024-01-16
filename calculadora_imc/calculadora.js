document.querySelector("#calcular").addEventListener("click", function(){
    const peso = document.querySelector("#peso").value;
    const altura = document.querySelector("#altura").value;
    const imc = calcularIMC(peso, altura);

    document.querySelector("#resultado").innerHTML=imc.toFixed(1);
}); 



function calcularIMC(peso, altura){
    const imc = peso / (altura*altura);
    return imc;
}
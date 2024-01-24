const hoja = document.querySelector("#hoja");
const DELTA = 1;
const DELTA2 = 1;

let left = -100;
let top1 = 100;

let alto_navegador = window.innerHeight;
let ancho_navegador = window.innerWidth;

function abajo(){
    hoja.style.top = (top1+=DELTA)+"px";
}
function arriba(){
    hoja.style.top = (top1-=DELTA)+"px";
}

var direccionAbajo = true;
var direccionDerecha = true;

function derecha(){
    hoja.style.left = (left+=DELTA2)+"px";
}
function izquierda(){
    hoja.style.left = (left-=DELTA2)+"px";
}

setInterval(()=>{
    if(direccionAbajo){
        abajo();
        if(top1 > alto_navegador-70){
            direccionAbajo = false;
        }
    }else{
        arriba();
        if(top1 <= 0){
            direccionAbajo = true;
        }
    }
    if(direccionDerecha){
        derecha();
        if(left > ancho_navegador-100){
            direccionDerecha = false;
        }
    }else{
        izquierda();
        if(left <= 0){
            direccionDerecha = true;
        }
    }
    hoja.style.transform += "rotate("+DELTA+"deg)";
    
    
    // hoja.style.transform += "rotate("+DELTA+"deg)";
    


console-console.log(alto_navegador);}, 10, 1);


// const MYTIMEOUT = setTimeout(quitarDiv, 3000);
const OCULTO = -100;
const VISIBLE = 0;

function quitarDiv(){
    let div1 = document.querySelector("#mensaje");
    div1.style.bottom = OCULTO+"px";
    div1.style.transition = "all 1s";
}


// const MYTIMEOUT2 = setTimeout(verDiv, 6000);

function verDiv(){
    let div1 = document.querySelector("#mensaje");
    div1.style.bottom = VISIBLE+"px";
    div1.style.transition = "all 2s";
}

// setInterval(quitarDiv, 3000);
// setInterval(verDiv, 6000);





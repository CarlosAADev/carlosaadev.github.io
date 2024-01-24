const hoja = document.querySelector("#hoja");
const DELTA = 1;
const DELTA2 = 1;

let left = -100;
let top1 = 100;

let alto_navegador = window.innerHeight;
let ancho_navegador = window.innerWidth;

setInterval(()=>{
    hoja.style.top = (top1+=DELTA)+"px";
    hoja.style.left = (left+=DELTA2)+"px";
    // hoja.style.transform += "rotate("+DELTA+"deg)";
    

    if (top1 > alto_navegador){
        top1 = -100;
        hoja.style.left = (left=DELTA2)+"px";
    }
    if (left > ancho_navegador){
        left = 0;
        hoja.style.left = (left-=DELTA2)+"px";
    }
console-console.log(alto_navegador);
}, 10, 1);


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

setInterval(quitarDiv, 3000);
setInterval(verDiv, 6000);





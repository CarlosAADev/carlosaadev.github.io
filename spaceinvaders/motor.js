const URL_IMAGE = "marciano1.png";

const canvas = document.getElementById("pantalla");
const ctx = canvas.getContext("2d");


function dibujarPantalla() {
    //Rectángulo
    
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 600, 800);

    //Texto
    ctx.font = "30px serif";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("SCORE", 10, 58);

    //Línea
    ctx.strokeStyle = "#00FF00";
    ctx.beginPath();
    ctx.moveTo(50, 700);
    ctx.lineTo(550, 700);
    ctx.stroke();
}

let enemigo1 = new Enemigo("Alien", "marcianito", 100, 100, 50, 50, 50, 2, ctx);
let enemigo2 = new Enemigo("Alien", "marcianito", 160, 100, 50, 50, 50, 2, ctx);
let enemigo3 = new Enemigo("Alien", "marcianito", 220, 100, 50, 50, 50, 2, ctx);

setInterval(()=>{
    dibujarPantalla();
    enemigo1.mover();
    enemigo1.dibujar();
    enemigo2.mover();
    enemigo2.dibujar();
    enemigo3.mover();
    enemigo3.dibujar();
}, 17);

class Enemigo {
    constructor(nombre, imagen, x, y, ancho, alto, salud, velocidad, ctx){
        this.nombre = nombre;
        this.imagen = document.getElementById(imagen);
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.salud = salud;
        this. velocidad = velocidad
        this.ctx = ctx;
    }
    mover(){
        this.x = this.x + this.velocidad;
        if(this.x > 550){
            this.velocidad=- this.velocidad;
        } 
        if(this.x < 0){
            this.velocidad=- this.velocidad;
        } 

        if(this.x == 550 || this.x == 0){
            this.y = this.y + 26;
        }
    }
    disparar(){

    }
    morir(){

    }
    dibujar(){
        this.ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
    }
}
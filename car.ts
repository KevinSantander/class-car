class auto {
//variables internas de la clase
  public estaPrendido: boolean;
  public acelerar: number;
  public frenar: number;
// funciones
  constructor(encendidoApagado:boolean, aceleracion:number, frenado:number) {
    this.estaPrendido = encendidoApagado;
    this.acelerar = aceleracion;
    this.frenar = frenado;
  };

  prederApagar():void {
    if (this.estaPrendido === true) {
      this.estaPrendido = false;
    }else{
      this.estaPrendido = true;
    }
  };

  obtenerVelocidad():number {
    return this.acelerar;
  }

  aumentoDeVelocidad():void {
    this.acelerar = this.acelerar ++;
  }

  disminucionDeVelocidad():void {
    this.frenar = this.frenar --;
  }

};

let primerAuto = new auto(true,90,60);
let velocidadDePrimerAuto = primerAuto.obtenerVelocidad();
console.log("Velocidad Actual: " + velocidadDePrimerAuto);

class auto {
// Variables internas de la clase
  public estaPrendido: boolean;
  public acelerar: number;
  public frenar: number;
// Funciones
  constructor(encendidoApagado:boolean, aceleracion:number, frenado:number) {
    this.estaPrendido = encendidoApagado;
    this.acelerar = aceleracion;
    this.frenar = frenado;
  };
// comienzo de los Metodos.
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
//Fin delos Metodos.
};

let primerauto = new auto(true,90,60);
let velocidadDelAuto = primerauto.obtenerVelocidad();
console.log("Velocidad Actual: " + velocidadDelAuto);
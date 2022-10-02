class Auto {
  // Variables internas de la clase
  public estaPrendido: boolean;
  public aceleracion: number;
  public frenado: number;
  // Funciones
  constructor(encendidoApagado: boolean, aceleracion: number, frenado: number) {
    this.estaPrendido = encendidoApagado;
    this.aceleracion = aceleracion;
    this.frenado = frenado;
  };
  // comienzo de los Metodos.
  public prederApagar(): void {
    if (this.estaPrendido === true) {
      this.estaPrendido = false;
    } else {
      this.estaPrendido = true;
    }
  };

  public obtenerVelocidad(): number {
    return this.aceleracion;
  }

  public aumentoDeVelocidad(): void {
    this.aceleracion = this.aceleracion++;
  }

  public disminucionDeVelocidad(): void {
    this.frenado = this.frenado--;
  }
  //Fin delos Metodos.
};

let primerAutomovil: Auto = new Auto(true, 90, 60);
let velocidadDelAutomovil = primerAutomovil.obtenerVelocidad();
console.log("Velocidad Actual: " + velocidadDelAutomovil);
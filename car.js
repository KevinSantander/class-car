var Auto = /** @class */ (function () {
    // Funciones
    function Auto(encendidoApagado, aceleracion, frenado) {
        this.estaPrendido = encendidoApagado;
        this.acelerar = aceleracion;
        this.frenar = frenado;
    }
    ;
    // comienzo de los Metodos.
    Auto.prototype.prederApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    ;
    Auto.prototype.obtenerVelocidad = function () {
        return this.acelerar;
    };
    Auto.prototype.aumentoDeVelocidad = function () {
        this.acelerar = this.acelerar++;
    };
    Auto.prototype.disminucionDeVelocidad = function () {
        this.frenar = this.frenar--;
    };
    return Auto;
}());
;
var primerAutomovil = new Auto(true, 90, 60);
var velocidadDelAutomovil = primerAutomovil.obtenerVelocidad();
console.log("Velocidad Actual: " + velocidadDelAutomovil);

var Auto = /** @class */ (function () {
    // Funciones
    function Auto(encendidoApagado, aceleracion, frenado) {
        this.estaPrendido = encendidoApagado;
        this.aceleracion = aceleracion;
        this.frenado = frenado;
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
        return this.aceleracion;
    };
    Auto.prototype.aumentoDeVelocidad = function () {
        this.aceleracion = this.aceleracion++;
    };
    Auto.prototype.disminucionDeVelocidad = function () {
        this.frenado = this.frenado--;
    };
    return Auto;
}());
;
var primerAutomovil = new Auto(true, 90, 60);
var velocidadDelAutomovil = primerAutomovil.obtenerVelocidad();
console.log("Velocidad Actual: " + velocidadDelAutomovil);

var auto = /** @class */ (function () {
    // funciones
    function auto(encendidoApagado, aceleracion, frenado) {
        this.estaPrendido = encendidoApagado;
        this.acelerar = aceleracion;
        this.frenar = frenado;
    }
    ;
    auto.prototype.prederApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    ;
    auto.prototype.obtenerVelocidad = function () {
        return this.acelerar;
    };
    auto.prototype.aumentoDeVelocidad = function () {
        this.acelerar = this.acelerar++;
    };
    auto.prototype.disminucionDeVelocidad = function () {
        this.frenar = this.frenar--;
    };
    return auto;
}());
;
var primerauto = new auto(true, 90, 60);
var velocidadDelAuto = primerauto.obtenerVelocidad();
console.log("Velocidad Actual: " + velocidadDelAuto);

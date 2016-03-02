/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control() {
            this.rotateCube1 = false;
            this.cube1Speed = 0;
            this.rotateCube2 = false;
            this.cube2Speed = 0;
            this.rotateCube3 = false;
            this.cube3Speed = 0;
            this.rotateCube4 = false;
            this.cube4Speed = 0;
            this.rotateCube5 = false;
            this.cube5Speed = 0;
        }
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map
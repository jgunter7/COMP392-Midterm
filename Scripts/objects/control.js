/// <reference path="../../typings/tsd.d.ts"/>
/*
Author:             Jason Gunter
Last Modified By:   Jason Gunter @ March 2, 2016
Description:        Midterm
Revision History:   https://github.com/jgunter7/COMP392-Midterm
*/
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
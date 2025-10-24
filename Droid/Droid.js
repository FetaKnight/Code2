export var Droid;
(function (Droid) {
    let switchCheck = true;
    function getCommand(_state) {
        switchCheck = !switchCheck;
        if (switchCheck) {
            return { module: "Chassis", method: "move", data: "forward" };
        }
        else {
            return { module: "Chassis", method: "move", data: "left" };
        }
    }
    Droid.getCommand = getCommand;
})(Droid || (Droid = {}));
//console.log(_state);
//

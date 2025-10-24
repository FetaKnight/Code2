export namespace Droid {

    interface Command {
        module: string,
        method: string,
        data: string,
    }

    let switchCheck: boolean = true


    export function getCommand(_state: object): Command {
        switchCheck = !switchCheck

        if (switchCheck) {
            return { module: "Chassis", method: "move", data: "forward" }
        }
        else {
            return { module: "Chassis", method: "move", data: "left" }



        }
    }
}














//console.log(_state);
//

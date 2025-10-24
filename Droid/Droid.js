export function getCommand(_state) {
    console.log(_state);
    return { module: "Chassis", method: "move", data: "forward" };
}

"use strict";
var linterTest;
(function (linterTest) {
    let key;
    (function (key) {
        key[key["Pos"] = 1] = "Pos";
        key[key["neg"] = -1] = "neg";
    })(key || (key = {}));
    const info = { text: "G`udetmvhsgBncd1 ", key: key.Pos };
    console.log(deCrypt(info.text, info.key));
    function deCrypt(text, _key) {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) + _key);
        }
        return result;
    }
})(linterTest || (linterTest = {}));

namespace linterTest {

  interface Info {
    text: string, key: key,
  }

enum key {
    Pos = 1, neg = -1
  }

  const info: Info = { text: "G`udetmvhsgBncd1 ", key: key.Pos };
  console.log(deCrypt(info.text, info.key));

  function deCrypt(text: string, _key: number): string {
    let result: string = "";
    for (let i: number = 0; i < text.length; i++){
      result += String.fromCharCode(text.charCodeAt(i) + _key)
    }
    return result;
  }
  
}
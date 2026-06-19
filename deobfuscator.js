function decodeHexEscapes(code){
return code.replace(
/\x([0-9a-fA-F]{2})/g,
(_,h)=>String.fromCharCode(parseInt(h,16))
);
}

function evaluateHexMath(code){
return code.replace(
/(0x[0-9a-fA-F]+(?:\s*[+-*/]\s*0x[0-9a-fA-F]+)+)/g,
expr=>{
try{
return Function("return ("+expr+")")();
}catch{
return expr;
}
}
);
}

function resolveStringArrays(code){

```
const match = code.match(
    /const\s+(_0x[a-f0-9]+)\s*=\s*\[(.*?)\];/s
);

if(!match) return code;

const arrayName = match[1];

let items;

try{
    items = Function(
        "return ["+match[2]+"]"
    )();
}catch{
    return code;
}

const regex =
    new RegExp(
        arrayName+"\\[(\\d+)\\]",
        "g"
    );

code = code.replace(
    regex,
    (_,index)=>
        JSON.stringify(items[index])
);

return code;
```

}

function beautify(code){
try{
return Babel.transform(code,{
compact:false,
comments:true
}).code;
}catch{
return code;
}
}

function deobfuscate(){

```
let code =
    document.getElementById("input").value;

code = decodeHexEscapes(code);

code = evaluateHexMath(code);

code = resolveStringArrays(code);

code = beautify(code);

document.getElementById("output").value =
    code;
```

}

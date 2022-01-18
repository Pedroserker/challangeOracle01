const SECRET = {
    "a":"ai",
    "e":"enter",
    "i":"imes",
    "o":"ober",
    "u":"ufat"
};
const REVERSE = {
"ai":"a",
"enter":"e",
"imes":"i",
"ober":"o",
"ufat":"u"
};

let firtv = document.querySelector(".emp");
let output = document.querySelector("#output");
let encript = document.querySelector("#encriptar");
let contenido = document.querySelector("#resultcontent");
let copy = document.querySelector("#copy");
let desencriptar = document.querySelector("#desencriptar");

encript.addEventListener("click",(e)=>{
    firtv.classList.add("hidden");
    contenido.classList.remove("hidden");
    let textoUser = document.querySelector("textarea");
    let val = textoUser.value.replace(/[aeiou]/g,(element)=>SECRET[element] || element);
    output.value = val;
});


copy.addEventListener("click",()=>{
    output.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});

desencriptar.addEventListener("click",()=>{
    let textoUser = document.querySelector("textarea");
    let val = textoUser.value.replace(/(ai|enter|imes|ober|ufat)/g,(element)=>REVERSE[element] || element);
    alert(val);
    output.value = val;
});
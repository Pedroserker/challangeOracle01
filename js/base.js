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

let lookinfor = document.querySelector(".lookingfor");
let contenido = document.querySelector("#resultcontent");

let encript = document.querySelector("#encriptar");

let desencriptar = document.querySelector("#desencriptar");

//entrada y salida
let textoUser = document.querySelector("#input");
let output = document.querySelector("#output");
//copiar al portapapeles
let copy = document.querySelector("#copy");
//Validador de entrada
let ok = false;

encript.addEventListener("click",(e)=>{
    console.log(textoUser.value.trim().length);
    if(!(textoUser.value.trim().length === 0) && ok)
    {
        
        lookinfor.classList.add("hidden");
        contenido.classList.remove("hidden");
        let val = textoUser.value.replace(/[aeiou]/g,(element)=>SECRET[element] || element);
        output.value = val;
    }
    else{
        contenido.classList.add("hidden");
        lookinfor.classList.remove("hidden");
        alert("¡La entrada es incorrecta o vacia!")
    }

});


copy.addEventListener("click",()=>{
    output.select();
    document.execCommand("copy");
    textoUser.focus();
    alert("Texto copiado al portapapeles");
});

desencriptar.addEventListener("click",()=>{
    
    if(!(textoUser.value.trim().length === 0) && ok)
    {

    lookinfor.classList.add("hidden");
    contenido.classList.remove("hidden");
    let val = textoUser.value.replace(/(ai|enter|imes|ober|ufat)/g,(element)=>REVERSE[element] || element);
    output.value = val;
    }
    else{
        contenido.classList.add("hidden");
        firtv.classList.remove("hidden");
        alert("¡La entrada es incorrecta o vacia!")
    }
});


textoUser.addEventListener("change",(e)=>{

     ok = Boolean(e.target.value.match(/^[a-z\s]*$/g));
})
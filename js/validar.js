function campoNecesario(input){
    if(input.value.trim().length > 0){
        console.log("fue validado");
        input.className = "form-control is-valid";
    }else {
        console.log("form-control is-invalid");
        input.className = "form-control is-invalid";
    }
}

function validacionURL(input){
    //expresion regular de validacion de la URL
    let direccion = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    if(direccion.test(input.value)){
        input.className = "form-control is-valid";
    }else{
        input.className = "form-control is-ivalid";
    }
}

function helperGeneral(event){
    event.preventDefault();
    console.log("nueva validacion completa");
}

let campoProducto = document.querySelector("#producto");
let campoCodigo = document.querySelector("#codigo");
let campoDescripcion = document.querySelector("#descripcion");
let campoDireccion = document.querySelector("#Url");
let formularioCompleto = document.querySelector("#formularioPagina");

campoProducto.addEventListener("blur",()=>{campoNecesario(campoProducto)});
campoCodigo.addEventListener("blur", ()=>{campoNecesario(campoCodigo)});
campoDescripcion.addEventListener("blur", ()=> {campoNecesario(campoDescripcion)});
campoDireccion.addEventListener('blur', ()=>{validacionURL(campoDireccion)});
formularioCompleto.addEventListener("submit", helperGeneral);

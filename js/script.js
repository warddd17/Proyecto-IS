
function login(){
    let divMensaje = document.querySelector ("#mensaje");
    let usuario = document.querySelectorAll('.entradaTexto')[0].value;
    let password = document.querySelectorAll('.entradaTexto')[1].value;
    if(usuario === "admin" && password === "123"){
        divMensaje.innerHTML = "Bienvenido al sistema " + usuario;
    }else{
        divMensaje.innerHTML = "Credenciales incorrectas";
    }
}


const btnIngresar = document.getElementById('btnIngresar');
btnIngresar.addEventListener("click",login);


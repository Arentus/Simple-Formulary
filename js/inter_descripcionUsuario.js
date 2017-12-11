let campoTexto = document.getElementById('nombre');
let campoEmail = document.getElementById('correo');

function validarTexto(texto){
	if(texto == null || texto == ""){
		return false;
	}
	return true;
}

function validarEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function mostrarErrorNombre(texto,advertencia){

	if(!(validarTexto(texto))){
		document.getElementById('error_nombre').innerHTML = advertencia;
	}else{
		document.getElementById('error_nombre').innerHTML = "";
	}

}

function mostrarErrorEmail(texto,advertencia){

	if(!(validarEmail(texto))){
		document.getElementById('error_correo').innerHTML = advertencia;
	}else{
		document.getElementById('error_correo').innerHTML = "";
	}

}

campoTexto.addEventListener('blur',function(){

	var nombreTexto = document.getElementById('nombre').value;
	mostrarErrorNombre(nombreTexto,'<div class="alert alert-danger" role="danger"><strong>Nombre Vacio!</strong> Por favor ingrese su nombre.</div>');
});

campoEmail.addEventListener('blur',function(){
	var email = document.getElementById('correo').value;
	mostrarErrorEmail(email,'<div class="alert alert-danger" role="danger"><strong>Email Incorrecto!</strong> Por favor, ingrese nuevamente su correo.</div>');
});

/*
function mostrarSugerencia(){
	document.getElementById('sugerenciaNombre').innerHTML = '<div class="alert alert-warning" role="alert"><strong>Por Favor! </strong> Ingresa tu nombre real.</div>';
}*/
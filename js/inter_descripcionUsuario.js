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

		$('#containerInput').addClass('form-group has-danger');
		$('#label').addClass('form-control-label');
		$('#nombre').addClass('form-control form-control-danger');
		
		document.getElementById('error_nombre').innerHTML = advertencia;
	
	}else{

		$('#containerInput').removeClass('form-group has-danger');
		$('#label').removeClass('form-control-label');
		$('#nombre').removeClass('form-control form-control-danger');
		
		$('#containerInput').addClass('form-group has-success');
		$('#label').addClass('form-control-label');
		$('#nombre').addClass('form-control form-control-success');
		
		document.getElementById('error_nombre').innerHTML = "";
	}
}

function mostrarErrorEmail(texto,advertencia){

	if(!(validarEmail(texto))){
		$('#containerEmail').addClass('form-group has-danger');
		$('#lbl2').addClass('form-control-label');
		$('#correo').addClass('form-control form-control-danger');
		
		document.getElementById('error_correo').innerHTML = advertencia;
	}else{

		$('#containerEmail').removeClass('form-group has-danger');
		$('#lbl2').removeClass('form-control-label');
		$('#correo').removeClass('form-control form-control-danger');
		
		$('#containerEmail').addClass('form-group has-success');
		$('#lbl2').addClass('form-control-label');
		$('#correo').addClass('form-control form-control-success');
		
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
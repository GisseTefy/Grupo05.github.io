function validarCorreo(){
	var correo, telefono, expresion, fecha, botonEnviar;
	correo= document.getElementById('txtEmail').value;
	telefono= document.getElementById('txtTelefono');
	fecha= document.getElementById('fecha');
	botonEnviar= document.getElementById('btnEnviar')
	expresion= /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
	if(!expresion.test(correo)){
		telefono.disabled = true;
		fecha.disabled = true;
		botonEnviar.disabled = true;
		alert("El correo no es válido");
		return false;
	}else{
		fecha.disabled = false;
		telefono.disabled = false;
		botonEnviar.disabled = false;
		return true;
	}
}

function validar() {
	// body...
	var correo, telefono, expresion;
	correo= document.getElementById('txtEmail').value;
	telefono= document.getElementById('txtTelefono').value;
	expresion= /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
	var ventana_secundaria;

	if(!expresion.test(correo)){
		alert("El correo no es válido");
		return false;
	}
	//Teléfono
	if(telefono.length!=10){
		alert("El telefono no es correcto");
		return false;
	}
	else if(isNaN(telefono)){
		alert("El telefono ingresado no es un número");
		return false;
	}
	else{
		alert("Datos ingresados correctamente");
		if (checkSubmit()){
			alert("Ejecutado checkSubmit() correctamente....");
			window.open('formularioContactoEnviado.html');
			alert("TODO OK");
			return true;
		}else{
			alert("Script checkSubmit() No se ejecuto correctamente");
			return true;
		}
	}	
}
function checkSubmit() {
    document.getElementById("btnEnviar").value = "Enviado los datos correctamente";
    document.getElementById("btnEnviar").disabled = true;
    window.close();
    return true;
}


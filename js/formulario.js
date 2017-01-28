$( document ).ready (function() {
  var formulario = document.send,
    elementos = formulario.elements

// Funciones

  var validarInputs = function(){
  	for (var i = 0; i < elementos.length; i++) {
  		// Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
  		if (elementos[i]) {
  			// Si es tipo texto, email o password vamos a comprobar que esten completados los input
  			if (elementos[i].value.length == 0) {
  				console.log('El campo ' + elementos[i].name + ' esta incompleto');
  				elementos[i].className = elementos[i].className + " error";
  				return false;
  			} else {
  				elementos[i].className = elementos[i].className.replace(" error", "");
  			}
  		}
  	}
  	return true;
  };

  var enviar = function (e) {
    if (!validarInputs()){
      console.log("Falto Validar Input");
      e.preventDefault();
    } else {
      console.log("Enviado Correctamente");
      // e.preventDefault();
    }
  };

// Blur y Focus

  var focusInput = function () {
    this.parentElement.children[1].className = 'label active';
    this.parentElement.children[0].className = this.parentElement.children[0].className.replace('error', '');
  }

  var blurInput = function () {
    if (this.value <= 0) {
      this.parentElement.children[1].className = 'label';
      this.parentElement.children[0].className = this.parentElement.children[0].className + ' error';
    }
  }

// Eventos
  formulario.addEventListener ("submit", enviar);

  for (var i = 0; i < elementos.length; i++) {
    if (elementos[i]) {
      elementos[i].addEventListener('focus', focusInput);
      elementos[i].addEventListener('blur', blurInput);
    }
  }
})

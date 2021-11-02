function validarDados() {

    var radio = document.forms.formulario1.elements.converte.value; //document.getElementsByName('converte');
    var texto = document.forms.formulario1.elements.idTexto.value;
    
    if (texto == "") {
        alert("Preencha campo TEXTO corretamente!");
        document.forms.formulario1.elements[0].focus();
        return false;
    };

    // usando o nome no formulario
    if (radio == 1) {
        texto = texto.toLowerCase();
    } else if (radio == 2) {
        texto = texto.toUpperCase();
    } else {
        alert("selecione um dos radios buttons");
        return false;
    }
    
    alert(texto);
    return true;
}
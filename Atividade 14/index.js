function validarDados() {

    var nome = document.forms.formulario1.elements[0].value;
    var email = document.forms.formulario1.elements["idEmail"].value;
    var comentario = document.forms.formulario1.elements.idMensagem.value;
    var pesquisa = document.forms.formulario1.elements.pesquisa.value;

    if (nome == "" || nome.length < 10) {
        alert("Preencha campo NOME corretamente!");
        document.forms.formulario1.elements[0].focus();
        return false;
    };

    if (email == "" || email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        alert("Preencha campo E-MAIL corretamente!");
        document.forms.formulario1.elements.idEmail.focus();
        return false;
    }

    //usando o nome no formulario  de maneira direta
    if (comentario == "" || comentario < 20) {
        alert("É necessario preencher o campo MENSAGEM com mais de 50 caracteres!");
        document.getElementById("idMensagem").focus();
        return false;
    }

    if (pesquisa == 1) {
        alert("Que bom que vocÊ voltou a visitar a página");
    } else if (pesquisa == 2) {
        alert("Volte sempre a esta página");
    } else {
        alert("selecione um dos radios buttons");
        return false;
    }

    return true;
}
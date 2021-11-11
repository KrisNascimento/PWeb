document.addEventListener("DOMContentLoaded", () => {

    var cursos = document.getElementById("cursosFatec");

    cursos.addEventListener('change', () => {
        if (!confirm(`Deseja visualizar mais informações sobre o curso selecionado?`)) return;
        window.open(`./${cursos.value}.html`, "_popup", "menubar=0,resizable=no,width=600,height=300");
    });

});
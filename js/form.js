const btnEnviar = document.getElementById("enviarCorreo");

btnEnviar.addEventListener('click', function(event){
    event.preventDefault();
    const emailPersona = document.getElementById("mail").value;
    const nombrePersona = document.getElementById("name").value;
    const nacimientoPersona = document.getElementById("date").value;
    const generoPersona = document.getElementById("genero").value;
    const rangoSalarioPersona = document.getElementById("rango").value;
    var gradoAcademicoPersona = "";

    let bachColegial = document.getElementsByName("Bachillerato_Colegial");
    let tecnico = document.getElementsByName("Técnico_Medio");
    let diplomado = document.getElementsByName("Diplomado");
    let bachiller = document.getElementsByName("Bachillerato");
    let licenciado = document.getElementsByName("Licenciatura");
    let doctor = document.getElementsByName("Doctorado");

    if (bachColegial[0].checked) {
        gradoAcademicoPersona += "\n-->Bachillerato Colegial ";
    }
    if (tecnico[0].checked) {
        gradoAcademicoPersona += "\n-->Técnico Medio ";
    }
    if (diplomado[0].checked) {
        gradoAcademicoPersona += "\n-->Diplomado ";
    }
    if (bachiller[0].checked) {
        gradoAcademicoPersona += "\n-->Bachillerato ";
    }
    if (licenciado[0].checked) {
        gradoAcademicoPersona += "\n-->Licenciatura ";
    }
    if (doctor[0].checked) {
        gradoAcademicoPersona += "\n-->Doctorado ";
    }

    window.location.href = `mailto:ballesteroharold17@gmail.com?subject=Envío%20Formulario%20Maquillaje&body=Nombre%3A%20${nombrePersona}%0ACorreo%3A%20${emailPersona}%0ANacimiento%3A%20${nacimientoPersona}%0AG%C3%A9nero%3A%20${generoPersona}%0ASalario%3A%20%E2%82%A1${rangoSalarioPersona}%0AEstudios%3A%20${gradoAcademicoPersona}`;
});

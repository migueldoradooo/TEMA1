function enviarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let sexo = document.getElementById("sexo").value;
    let aficiones = document.getElementById("aficiones").value;
    let comentario = document.getElementById("comentario").value;

    document.getElementById("resultado").innerHTML = `
        <p>Nombre: ${nombre}</p>
        <p>Apellido: ${apellido}</p>
        <p>Email: ${email}</p>
        <p>Sexo: ${sexo}</p>
        <p>Aficiones: ${aficiones}</p>
        <p>Comentario: ${comentario}</p>
    `;
}
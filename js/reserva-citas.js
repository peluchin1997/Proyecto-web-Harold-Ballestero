
document.addEventListener("DOMContentLoaded", function () {
    const citaForm = document.getElementById("citaForm");
    const mensaje = document.getElementById("mensaje");
    const tablaCitas = document.getElementById("tablaCitas"); // Agrega un elemento <table> en tu HTML para mostrar las citas
  
    citaForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const nombreCliente = document.getElementById("nombreCliente").value;
      const fechaCita = document.getElementById("fechaCita").value;
  
      // Aquí puedes guardar los datos en una estructura de datos (por ejemplo, un array)
      // o en una base de datos usando AJAX o Fetch API
  
      // Añadir el registro a la tabla
      const newRow = tablaCitas.insertRow();
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      cell1.innerHTML = nombreCliente;
      cell2.innerHTML = fechaCita;
  
      // Limpiar el formulario
      citaForm.reset();
  
      // Puedes enviar una notificación aquí (a través de email, mensaje, etc.)
  
      mensaje.innerHTML = "Cita reservada exitosamente";
    });
  });
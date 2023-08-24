document.addEventListener('DOMContentLoaded', function() {
    // Cargar el archivo JSON usando fetch
    fetch('estilos.json') // Cambia 'datos.json' al nombre real de tu archivo JSON
        .then(response => response.json())
        .then(data => {
            // Actualizar los elementos HTML con los datos del JSON
            document.getElementById('nombre').textContent = data.tipo;
            document.getElementById('edad').textContent = data.descripcion;
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
});
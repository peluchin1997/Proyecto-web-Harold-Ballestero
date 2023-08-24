function mostrarSubMenu(e){
    e.preventDefault();
    $(document.getElementById("submenu")).toggle("slow");
}

function mostrarTodo(){

    let tipoUña = document.getElementById("seleccion_tipo");
    let textoUña = tipoUña.value;

    if (textoUña == "normal") {
        document.getElementById("infUñas").innerHTML = "<h2>Uñas Normales</h2><span style='font-size: 14px;'>Características:</span>" +
        "<ul style='margin-left:60px;'><li class='caracteristicas'>No daña la uña.</li><li class='caracteristicas'>Se rompe con facilidad.</li>" + 
        "<li class='caracteristicas'>Se utiliza acetona para quitarse.</li><li class='caracteristicas'>Se seca con el tiempo.</li>" + 
        "</ul><span style='font-size: 14px; font-weight:bold;'>Precio: ₡5000</span>";
    }
    if (textoUña == "semipermanente") {
        document.getElementById("infUñas").innerHTML = "<h2>Uñas Semipermanentes</h2><span style='font-size: 14px;'>Características:</span>" +
        "<ul style='margin-left:60px;'><li class='caracteristicas'>Tiene una duración entre 15-20 días.</li><li class='caracteristicas'>Son más duras que las normales.</li>" + 
        "<li class='caracteristicas'>Se ocupa de un profesional para quitarsen.</li><li class='caracteristicas'>Se secan con lámpara LED/UV.</li>" + 
        "</ul><span style='font-size: 14px; font-weight:bold;'>Precio: ₡7000</span>";
    }
    if (textoUña == "gel") {
        document.getElementById("infUñas").innerHTML = "<h2>Uñas Gel X</h2><span style='font-size: 14px;'>Características:</span>" +
        "<ul style='margin-left:60px;'><li class='caracteristicas'>Al ser gel, no tienen olor.</li><li class='caracteristicas'>Tienden a versen más naturales.</li>" + 
        "<li class='caracteristicas'>Menos duraderas que las acrílicas.</li><li class='caracteristicas'>Si se daña la extensión, se debe remover completamente y reparar.</li>" + 
        "</ul><span style='font-size: 14px; font-weight:bold;'>Precio: ₡12500</span>";
    }
    if (textoUña == "acrilica") {
        document.getElementById("infUñas").innerHTML = "<h2>Uñas Acrílicas</h2><span style='font-size: 14px;'>Características:</span>" +
        "<ul style='margin-left:60px;'><li class='caracteristicas'>Reparación rápida y fáciles de remover.</li><li class='caracteristicas'>Olor fuerte.</li>" + 
        "<li class='caracteristicas'>Son muy resistentes, por lo que duran bastante tiempo.</li><li class='caracteristicas'>Se nota mucho que son artificiales.</li>" + 
        "</ul><span style='font-size: 14px; font-weight:bold;'>Precio: ₡15000</span>";
    }





    document.addEventListener("DOMContentLoaded", function () {
        const estilosContainer = document.getElementById("estilos-container");
    
        // Realizar la solicitud HTTP para obtener el JSON
        fetch("json/estilos.json")
            .then(response => response.json())
            .then(data => {
                // Iterar a través de los datos y construir el contenido HTML
                data.estilos.forEach(estilo => {
                    const estiloDiv = document.createElement("div");
                    estiloDiv.className = "estilo";
    
                    estiloDiv.innerHTML = `
                        <h2>${estilo.tipo}</h2>
                        <p>${estilo.descripcion}</p>
                        <img src="${estilo.imagen}" alt="${estilo.tipo}">
                    `;
    
                    estilosContainer.appendChild(estiloDiv);
                });
            })
            .catch(error => {
                console.error("Error al cargar el JSON:", error);
            });
    });

}
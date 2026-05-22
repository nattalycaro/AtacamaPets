
document.addEventListener("DOMContentLoaded", function () {
    
    const buscador = document.getElementById("buscadorServicios");
    const filtro = document.getElementById("filtroCategoria");
    const servicios = document.querySelectorAll(".servicio-item");

    function filtrarServicios() {
        const texto = buscador.value.toLowerCase();
        const categoria = filtro.value;

        servicios.forEach(servicio => {
            const contenido = servicio.textContent.toLowerCase();
            const categoriaServicio = servicio.dataset.categoria;

            const coincideTexto = contenido.includes(texto);
            const coincideCategoria = categoria === "todos" || categoriaServicio === categoria;

            servicio.style.display =
                (coincideTexto && coincideCategoria) ? "block" : "none";
        });
    }

    buscador.addEventListener("input", filtrarServicios);
    filtro.addEventListener("change", filtrarServicios);
});


// BOTÓN MODO OSCURO
const botonModo = document.getElementById("modoOscuroBtn");

// Revisar si estaba activado antes
if (localStorage.getItem("modoOscuro") === "activo") {
    document.body.classList.add("dark-mode");
}

// Cambiar modo al hacer click
botonModo.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    // Guardar preferencia
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("modoOscuro", "activo");
    } else {
        localStorage.removeItem("modoOscuro");
    }

});
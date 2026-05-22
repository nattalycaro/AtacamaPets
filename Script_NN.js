
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
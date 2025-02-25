export function resaltarProducto() {
    const contenedores = document.querySelectorAll(".contenedor");

    contenedores.forEach((contenedor) => {
        contenedor.addEventListener("mouseover", () => {
            contenedor.style.border = "2px solid blue";
            contenedor.style.transform = "scale(1.05)";
            contenedor.style.transition = "transform 0.3s, border 0.3s";
        });

        contenedor.addEventListener("mouseout", () => {
            contenedor.style.border = "1px solid #ccc";
            contenedor.style.transform = "scale(1)";
        });

        contenedor.addEventListener("click", () => {
            contenedor.style.backgroundColor = "#f0f8ff";
        });
    });
}
import { actualizarContadorHeader } from '../header/header.js';
import { data_img, data_producto, carrito } from '../data/data.js';

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


export function eliminarContenedor() {
    const contenedores = document.querySelectorAll(".contenedor");

    contenedores.forEach((contenedor) => {
        const botonEliminar = contenedor.querySelector("button.eliminar");
        if (botonEliminar) {
            botonEliminar.addEventListener("click", () => {
                if (confirm("¿Estás seguro de que quieres eliminar este producto?")) {
                    contenedor.remove();
                }
            });
        }
    });
}


export function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.log("Producto agregado al carrito:", producto.descripcion); 
    actualizarContadorHeader(carrito);
}


export function actualizarContador() {
    const contador = document.getElementById("contador-carrito");
    if (contador) {
        contador.textContent = carrito.length;
    }
}
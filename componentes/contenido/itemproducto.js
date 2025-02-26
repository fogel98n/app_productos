import { eliminarContenedor } from './funcionesproductos.js';
import { agregarAlCarrito } from './funcionesproductos.js'; 

export function producto(src, descripcion, precio) {
    const contenedor = document.createElement("div");
    contenedor.className = "contenedor";

    const imagen = document.createElement("img");
    imagen.src = src;
    imagen.alt = descripcion;

    const descripcionElemento = document.createElement("p");
    descripcionElemento.textContent = descripcion;

    const precioElemento = document.createElement("p");
    precioElemento.textContent = `Precio: $${precio}`;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "eliminar";

    const botonAgregar = document.createElement("button");
    botonAgregar.textContent = "Agregar al carrito";
    botonEliminar.addEventListener("click", () => {
        eliminarContenedor(contenedor);
    });
    botonAgregar.addEventListener("click", () => {
        const producto = { src, descripcion, precio }; 
        agregarAlCarrito(producto); 
    });


    contenedor.appendChild(imagen);
    contenedor.appendChild(descripcionElemento);
    contenedor.appendChild(precioElemento);
    
    contenedor.appendChild(botonAgregar);

    return contenedor;
}
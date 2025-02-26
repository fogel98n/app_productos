import { producto } from "./itemproducto.js";
import { data_img } from "../data/data.js";
import { data_producto } from "../data/data.js";
import { resaltarProducto } from "./funcionesproductos.js";

export function cargarproductos() {
    const datos_img = data_img();
    const datos_productos = data_producto();

    if (datos_img.length !== datos_productos.length) {
        console.error("Los arrays de imágenes y productos no tienen la misma longitud.");
        return;
    }

    const contenedorPrincipal = document.createElement("div");
    contenedorPrincipal.className = "contenedor-principal";

    datos_img.forEach((img, index) => {
        const productoData = datos_productos[index]; 
        const productoElemento = producto(img.src, productoData.descripcion, productoData.precio); 
        contenedorPrincipal.appendChild(productoElemento);
    });

    resaltarProducto();

    return contenedorPrincipal;
}

export function contenido() {
    const contenedor = document.createElement("div");
    contenedor.className = "contenido";

    const productos = cargarproductos(); 
    contenedor.appendChild(productos); 

    return contenedor;
}
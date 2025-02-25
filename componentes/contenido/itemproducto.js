export function item(src, descripcion, precio) {

    const contenedor = document.createElement("div");
    contenedor.className = "contenedor";
    const imagen = document.createElement("img");
    imagen.src = src;
    imagen.alt = descripcion;
    const descripcionElemento = document.createElement("p");
    descripcionElemento.textContent = descripcion;
    const precioElemento = document.createElement("p");
    precioElemento.textContent = `Precio: $${precio}`;
    const boton = document.createElement("button");
    boton.textContent = "eliminar";
    boton.addEventListener("click", () => {

        contenedor.remove();

    });
    contenedor.appendChild(imagen);
    contenedor.appendChild(descripcionElemento);
    contenedor.appendChild(precioElemento);
    contenedor.appendChild(boton);
    return contenedor;

}

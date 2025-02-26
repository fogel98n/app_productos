export function mostarmenu() {
    let header = document.createElement("header");
    header.className = "header";

    const logo = document.createElement("img");
    logo.src = "https://wallpapercave.com/wp/wp5208821.png";
    logo.alt = "Logo";
    logo.className = "logo";

    const contadorProductos = document.createElement("span");
    contadorProductos.id = "contador-productos"; 
    contadorProductos.textContent = "0 productos"; 

    const contenedorLogoContador = document.createElement("div");
    contenedorLogoContador.className = "contenedor-logo-contador";
    contenedorLogoContador.appendChild(logo);
    contenedorLogoContador.appendChild(contadorProductos);

    header.appendChild(contenedorLogoContador);
    return header;
}

export function actualizarContadorHeader(carrito) {
    const contadorProductos = document.getElementById("contador-productos");
    if (contadorProductos) {
        const cantidad = carrito.length;
        contadorProductos.textContent = `${cantidad} ${cantidad === 1 ? "producto" : "productos"}`;
    }
}
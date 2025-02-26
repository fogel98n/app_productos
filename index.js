import { mostarmenu } from "./componentes/header/header.js";
import { contenido } from "./componentes/contenido/catalogo.js";
import { cargarproductos } from "./componentes/contenido/catalogo.js";

function iniciarapp() {
    let DOM = document.getElementById("root");
    DOM.appendChild(mostarmenu());
    const contenidoElement = contenido();
    DOM.appendChild(contenidoElement);
    const contenedorProductos = contenidoElement.querySelector('.contenedor-productos'); 
    cargarproductos(contenedorProductos);
}

iniciarapp();
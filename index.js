import { header } from "./componentes/header/header.js";
import { contenido } from "./componentes/contenido/contenido.js";
import { cargarproductos } from "./componentes/contenido/contenido.js";

function iniciarapp() {
    let DOM = document.getElementById("root");
    DOM.appendChild(header());
    const contenidoElement = contenido();
    DOM.appendChild(contenidoElement);
    const contenedorProductos = contenidoElement.querySelector('.contenedor-productos'); 
    cargarproductos(contenedorProductos);
}

iniciarapp();
import {
    carregarPagina
} from "./navegacao.js";

import {
    configurarFormulario
} from "./cadastro.js";


function atualizarAplicacao() {

    const rota =
        carregarPagina();

    if (rota === "cadastro") {
        configurarFormulario();
    }

}


window.addEventListener(
    "hashchange",
    atualizarAplicacao
);


window.addEventListener(
    "DOMContentLoaded",
    atualizarAplicacao
);
import {
    salvarCadastro,
    preencherCadastroSalvo
} from "./storage.js";


export function configurarFormulario() {

    preencherCadastroSalvo();

    const formulario =
        document.getElementById("form-cadastro");

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", function(evento) {

        evento.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        const dadosCadastro = {

            nome: formulario.nome.value,
            email: formulario.email.value,
            nascimento: formulario.nascimento.value,
            telefone: formulario.telefone.value,
            cpf: formulario.cpf.value,
            cep: formulario.cep.value,
            endereco: formulario.endereco.value,
            bairro: formulario.bairro.value,
            cidade: formulario.cidade.value,
            estado: formulario.estado.value

        };

        salvarCadastro(dadosCadastro);

        alert("Cadastro salvo com sucesso!");

    });
}


if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        configurarFormulario
    );

} else {

    configurarFormulario();

}
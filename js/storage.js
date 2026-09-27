export function salvarCadastro(dados) {

    localStorage.setItem(
        "cadastroVoluntario",
        JSON.stringify(dados)
    );

}


export function obterCadastro() {

    const dadosSalvos =
        localStorage.getItem("cadastroVoluntario");

    if (!dadosSalvos) {
        return null;
    }

    return JSON.parse(dadosSalvos);
}


export function preencherCadastroSalvo() {

    const dados =
        obterCadastro();

    if (!dados) {
        return;
    }

    for (const campo in dados) {

        const input =
            document.querySelector(`[name="${campo}"]`);

        if (input) {
            input.value = dados[campo];
        }
    }
}
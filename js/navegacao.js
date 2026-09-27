export const paginas = {

    inicio: `
        <section>
            <h2>Quem somos</h2>

            <p>
                A ONG Elo Solidário conecta pessoas e iniciativas sociais,
                promovendo ações de voluntariado e doações de forma
                transparente, acessível e colaborativa.
            </p>

            <picture>
                <source srcset="/imagem-ong.webp" type="image/webp">

                <img
                    src="/imagem-ong.jpg"
                    alt="Voluntários realizando uma ação de limpeza e coleta de resíduos">
            </picture>
        </section>

        <section>
            <h2>Doações</h2>

            <p>
                As doações ajudam a manter os projetos sociais e permitem
                que mais pessoas sejam atendidas pelas ações da ONG.
            </p>
        </section>

        <section>
            <h2>Voluntariado</h2>

            <p>
                Quem deseja contribuir com seu tempo e suas habilidades
                pode participar das ações voluntárias realizadas pela ONG.
            </p>
        </section>

        <section>
            <h2>Campanhas e Projetos</h2>

            <p>
                A ONG desenvolve campanhas e projetos voltados para
                diferentes necessidades sociais, incentivando a
                participação da comunidade.
            </p>
        </section>

        <section>
            <h2>Contato</h2>

            <ul>
                <li>Telefone: (11) 99999-9999</li>
                <li>E-mail: contato@elosolidario.org</li>
            </ul>
        </section>
    `,


    projetos: `
        <h1>Projetos da ONG Elo Solidário</h1>

        <section class="card">

            <h2>Campanhas e Projetos</h2>

            <span class="badge">Projeto ativo</span>

            <p>
                A ONG Elo Solidário desenvolve campanhas e projetos sociais
                para apoiar pessoas e comunidades que precisam de ajuda.
            </p>

            <picture>
                <source
                    srcset="/projeto-alimentos.webp"
                    type="image/webp">

                <img
                    src="/projeto-alimentos.jpg"
                    alt="Voluntários preparando caixas com alimentos para doação">
            </picture>

        </section>


        <section class="card">

            <h2>Doações</h2>

            <p>
                As doações ajudam a manter os projetos da ONG e contribuem
                para que mais pessoas possam ser atendidas.
            </p>

            <div class="alerta">
                As doações podem ser realizadas durante todo o ano.
            </div>

            <picture>
                <source
                    srcset="/doacao-alimentos.webp"
                    type="image/webp">

                <img
                    src="/doacao-alimentos.jpg"
                    alt="Alimentos organizados para serem distribuídos em uma ação solidária">
            </picture>

        </section>


        <section class="card">

            <h2>Voluntariado</h2>

            <p>
                Os voluntários podem participar das ações da ONG,
                contribuindo com seu tempo e suas habilidades.
            </p>

            <a href="#cadastro" class="botao-link">
                Quero ser voluntário
            </a>

        </section>


        <div class="toast">
            Obrigado por apoiar a ONG Elo Solidário!
        </div>
    `,


    cadastro: `
        <h1>Cadastro de Voluntário</h1>

        <form id="form-cadastro">

            <fieldset>

                <legend>Dados Pessoais</legend>

                <label for="nome">Nome completo:</label>
                <input type="text" id="nome" name="nome" required>

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>

                <label for="nascimento">Data de nascimento:</label>
                <input type="date" id="nascimento" name="nascimento" required>

                <label for="telefone">Telefone:</label>
                <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    pattern="\\(\\d{2}\\) \\d{5}-\\d{4}"
                    placeholder="(11) 99999-9999"
                    required>

                <label for="cpf">CPF:</label>
                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
                    placeholder="000.000.000-00"
                    required>

            </fieldset>

            <fieldset>

                <legend>Endereço</legend>

                <label for="cep">CEP:</label>
                <input
                    type="text"
                    id="cep"
                    name="cep"
                    pattern="\\d{5}-\\d{3}"
                    placeholder="00000-000"
                    required>

                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" required>

                <label for="bairro">Bairro:</label>
                <input type="text" id="bairro" name="bairro" required>

                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade" required>

                <label for="estado">Estado:</label>
                <input type="text" id="estado" name="estado" required>

            </fieldset>

            <button type="submit">
                Enviar cadastro
            </button>

        </form>
    `
};


export function carregarPagina() {

    const rota =
        window.location.hash.replace("#", "") || "inicio";

    const conteudoPrincipal =
        document.getElementById("conteudo-principal");

    if (!conteudoPrincipal) {
        return;
    }

    const paginaSelecionada =
        paginas[rota] || paginas.inicio;

    conteudoPrincipal.innerHTML = paginaSelecionada;

    return rota;
}
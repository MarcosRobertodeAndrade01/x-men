// Objetivo 1: 
        // Passo 1:quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        const personagens = document.querySelectorAll('.personagem');

        // Passo 2: adicionar a classe selecionado no personagem que o usuário passar o mouse
        personagens.forEach((personagem) => {
            personagem.addEventListener('mouseenter', () => {

        //  Passo 3:verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele

                removerSelecaoDoPersonagem();

                personagem.classList.add('selecionado')

// Objetivo 2: quando passar o mouse em cima do pernonagem na listagem e trocar a ImageBitmap, p nome e a descrição do personagem grande

            // passo:1 - pegar o elemento do personagem grande pra adicionar as informações nele
            const imagemPersonagemGrande = document.querySelector('.personagem-grande');

            // passo:2- Alterar a imagem do personagem grande
            const idPersonagem = personagem.attributes.id.value;

            imagemPersonagemGrande.src =`./src/images/imagens/card-${idPersonagem}.png`;

            // passo:3- Alterar o nome do personagem grande
            const nomePersonagem = document.getElementById('nome-personagem');
            nomePersonagem.innerText =  personagem.getAttribute('data-name');  

            // passo:4- Alterar a descrição do personagem grande
            const descricaoPersonagem = document.getElementById('descricao-personagem');
            descricaoPersonagem.innerText = personagem.getAttribute('data-description');
            })
            })

            function removerSelecaoDoPersonagem() {
                const personagemSelecionado = document.querySelector('.selecionado');
                personagemSelecionado.classList.remove('selecionado');
            }


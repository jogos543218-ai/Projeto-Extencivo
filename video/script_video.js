const aulas = {
            "basico_1": {
                titulo: "Aula 1: O Básico, HTTPS e URLs",
                paragrafo: "Esta aula fundamental cobre os conceitos essenciais que todo usuário deve conhecer. Entenda o papel do HTTPS e do cadeado na barra de endereço, aprenda a identificar os primeiros sinais de um site suspeito (como erros de ortografia na URL) e veja as precauções mínimas para navegar com segurança. É o ponto de partida para qualquer pessoa que busca se proteger de golpes online.",
                videoId: "sEFcVHwCq_M"
            },
            "intermediario_1": {
                titulo: "Aula 2: Nível Intermediário e as 3 Ferramentas Essenciais",
                paragrafo: "Nesta aula, o foco muda do básico para a **verificação ativa**. Você descobrirá por que o cadeado não garante segurança e aprenderá a utilizar 3 ferramentas profissionais para checar a autenticidade de um site: **WHOIS** (para checar registro de domínio), o **Transparency Report do Google** (para reputação) e o **Vírus Total** (para análise de URL). Aprenda a ir além do que o criminoso quer que você veja.",
                videoId: "U1BNJR7JXA0"
            },
            "avancado_1": {
                titulo: "Aula 3: Nível Avançado (Vulnerabilidades e Segurança)",
                paragrafo: "Prepare-se para uma imersão nos pilares da Segurança da Informação. Esta aula avançada explora conceitos como vulnerabilidades, criptografia e as etapas necessárias para implementar uma política de segurança robusta. Ideal para quem busca uma compreensão completa sobre como os sistemas são protegidos (ou atacados), indo muito além da checagem de sites.",
                videoId: "Q8K82P-c8aE"
            }
        };

        const playerDiv = document.querySelector('.video-player');
        const tituloElement = document.getElementById('titulo-aula-atual');
        const paragrafoElement = document.getElementById('paragrafo-aula-atual');
        const linksAula = document.querySelectorAll('.link-aula');
        const botoesNivel = document.querySelectorAll('.botao-nivel');
        
        // Define a aula padrão na inicialização (a intermediária, como é o seu foco)
        const aulaPadraoId = "intermediario_1"; 
        
        // Função para carregar o vídeo e os textos
        function carregarAula(aulaId) {
            const aula = aulas[aulaId];
            if (!aula) return;

            // 1. Carrega o vídeo no player
            playerDiv.innerHTML = `
                <iframe 
                    src="https://www.youtube.com/embed/${aula.videoId}?rel=0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `;

            // 2. Atualiza os textos
            tituloElement.textContent = aula.titulo;
            paragrafoElement.textContent = aula.paragrafo;

            // 3. Destaca o link na barra lateral
            linksAula.forEach(link => link.classList.remove('aula-selecionada'));
            document.querySelector(`[data-id="${aulaId}"]`).classList.add('aula-selecionada');
        }

        // Lógica de Troca de Vídeo ao clicar no link da sidebar
        linksAula.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const aulaId = link.getAttribute('data-id');
                carregarAula(aulaId);
            });
        });

        // Lógica do Acordeão (Gaveta)
        botoesNivel.forEach(botao => {
            botao.addEventListener('click', () => {
                const idTarget = botao.getAttribute('data-target');
                const listaTarget = document.getElementById(idTarget);
                
                // Fecha todas as outras listas e remove o destaque dos botões
                botoesNivel.forEach(b => b.classList.remove('ativo'));
                document.querySelectorAll('.lista-aulas').forEach(lista => lista.classList.remove('ativo'));

                // Abre/fecha a lista alvo e destaca o botão
                listaTarget.classList.toggle('ativo');
                botao.classList.toggle('ativo');
            });
        });

        // Chama a função para carregar a aula inicial ao carregar a página
        carregarAula(aulaPadraoId);
    
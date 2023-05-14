const BotaoAlterarTema = document.getElementById('botao-alterar-tema');
const body = document.querySelector('body');
const ImagemLua = document.querySelector('.imagem-botao');

BotaoAlterarTema.addEventListener('click', () => {
    const EscuroAtivo = body.classList.contains('modo-escuro');
    
    body.classList.toggle('modo-escuro');

    if (EscuroAtivo) {
        ImagemLua.setAttribute('src','./src/imagens/moon.png');
    } else {
        ImagemLua.setAttribute('src','./src/imagens/sun.png');
    }
});


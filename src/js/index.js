/*
  OBJETIVO - quando clicarmos no botão, devemos mostrar a imagem de fundo correspondente.
  - passo 1: pegar o elemento HTML dos botões
  - passo 2: identificar o clique do usuário no botão
  - passo 3: desmarcar o botão selecionado anterior
  - passo 4: marcar o botão clicado como se estivesse selecionado
  - passo 5: esconder a imagem de fundo anterior
  - passo 6: mostrar a imagem de fundo correspondente ao botão clicado
*/

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener('click', () => {

    desativarBotaoSelecionado();
    selecionarBotaoCarrossel(botao);
    esconderImagemAtiva();
    mostrarImagemFundo(indice);
  })
})

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector('.selecionado');
  botaoSelecionado.classList.remove('selecionado');
}

function selecionarBotaoCarrossel(botao) {
  botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector('.ativa');
  imagemAtiva.classList.remove('ativa');
}

function mostrarImagemFundo(indice) {
  imagens[indice].classList.add('ativa');
}

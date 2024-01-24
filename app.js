let quantidadeDeNumeros = parseInt(10); 
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p',`Escolha um número entre 1 e ${quantidadeDeNumeros}`); 
}
exibirMensagemInicial();

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * quantidadeDeNumeros +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == quantidadeDeNumeros) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }

}

function verificarChute() { 
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        quantidadeTentativas = tentativas > 1? 'tentativas' : 'tentativa';
        mensagemTentativa = `Não é o Holdini, mas manja das adivinhações!\nVocê usou ${tentativas} ${quantidadeTentativas}.`
        exibirTextoNaTela('h1','Acertou!!');
        exibirTextoNaTela('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(chute > numeroSecreto) {
            exibirTextoNaTela('h1',`O número secreto é menor que ${chute}.`);
            exibirTextoNaTela('p','Tente novamente.');
        }
        else{
            exibirTextoNaTela('h1',`O numéro secreto é maior que ${chute}.`);
            exibirTextoNaTela('p','Tente novamente.');
        } 
    tentativas++;
    limparCampo();
    }
    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
exibirMensagemInicial();
tentativas = 1;
numeroSecreto = gerarNumeroAleatorio();
limparCampo();
document.getElementById('reiniciar').setAttribute('disabled',true);
    
}


//alert("Oi. Vamos jogar um jogo?");
var usuario;
var computador;
var mensagem;
var pc;

usuario = prompt("Digite uma das opcoes: pedra, papel ou tesoura");
computador = Math.random();

//alert(computador);

//computador pedra - 0-0,33
//computador papel - 0,33 - 0,66
//computador tesoura - 0,66 - 1

if (usuario.length == 0) {
    mensagem = 'A opção digitada invalida';
    pc = '';
}
else if (usuario.toUpperCase() === 'PEDRA') {
    if (computador <= 0.33) {
        mensagem = 'Empate';
        pc = 'Pedra';
    } else if (computador > 0.33 && computador <= 0.66) {
        mensagem = 'Papel cobre pedra';
        pc = 'Papel';
    }
    else {
        mensagem = 'Pedra quebra tesoura'; 
        pc = 'Tesoura';
    }
        
}
else if (usuario.toUpperCase() === 'PAPEL') {
    if (computador <= 0.33) {
        mensagem = 'Papel cobre pedra';
        pc = 'Pedra';
    } else if (computador > 0.33 && computador <= 0.66) {
        mensagem = 'Empate';
        pc = 'Papel';
    }
    else {
        mensagem = 'Tesoura corta Papel';
        pc = 'Tesoura'
    }
}
else if (usuario.toUpperCase() === 'TESOURA') {
    if (computador <= 0.33) {
        mensagem = 'Pedra quebra tesoura';
        pc = 'Pedra';
    } else if (computador > 0.33 && computador <= 0.66) {
        mensagem = 'Tesoura corta Papel';
        pc = 'Papel';
    }
    else {
        mensagem = 'Empate';
        pc = 'Tesoura';
    }
} else {
    mensagem = 'A opção digitada invalida.';
    pc = '';
}

if (pc == '')
    alert(mensagem);
else
    alert("O sistema escolheu: " + pc + "\nRESULTADO: " + mensagem);
function Conta() {
    var nome;
    var banco;
    var numeroConta;
    var saldo;

    this.getNome = function () {
        return nome;
    };
    this.setNome = function (value) {
        nome = value;
    };

    this.getBanco = function () {
        return banco;
    };
    this.setBanco = function (value) {
        banco = value;
    };
    this.getNumeroConta = function () {
        return numeroConta;
    };
    this.setNumeroConta = function (value) {
        numeroConta = value;
    };
    this.getSaldo = function () {
        return saldo;
    };
    this.setSaldo = function (value) {
        saldo = value;
    };
}


function Corrente() {
    var saldo;
    this.getSaldoEspecial = function () {
        return saldo;
    };
    this.setSaldoEspecial = function (value) {
        saldo = value;
    }
}

function Poupanca() {

    var juros;
    var dataVencimento;
    this.getJuros = function () {
        return juros;
    };
    this.setJuros = function (value) {
        juros = value;
    };

    this.getDataVencimento = function () {
        return dataVencimento;
    };
    this.setDataVencimento = function (value) {
        dataVencimento = value;
    };
}

Poupanca.prototype = new Conta();
Corrente.prototype = new Conta();

nPoupanca = new Poupanca();
nCorrente = new Corrente();

nPoupanca.setJuros('12,7');
nPoupanca.setDataVencimento('22-02-22');
nPoupanca.setNome('Rosa Maria');
nPoupanca.setBanco('Dos Sonhos');
nPoupanca.setNumeroConta('21210058-1');
nPoupanca.setSaldo('5.698,36');

nCorrente.setSaldoEspecial('2000');
nCorrente.setNome('Bárbara');
nCorrente.setBanco('Bem me quer');
nCorrente.setNumeroConta('54546321-8');
nCorrente.setSaldo('945,54');

console.log(nPoupanca.getNome() + " " + nPoupanca.getBanco() + " " + nPoupanca.getNumeroConta() + " " + nPoupanca.getSaldo() + " " + nPoupanca.getJuros() + " " + nPoupanca.getDataVencimento());
alert("Cliente: " + nPoupanca.getNome() + "\nBanco: " + nPoupanca.getBanco() + "\nConta Poupança: " + nPoupanca.getNumeroConta() + "\nSaldo disponível: " + nPoupanca.getSaldo() + "\nJuros Aplicados: " + nPoupanca.getJuros() + "\nData de Vencimento: " + nPoupanca.getDataVencimento());

console.log(nCorrente.getNome() + " " + nCorrente.getBanco() + " " + nCorrente.getNumeroConta() + " " + nCorrente.getSaldo() + " " + nCorrente.getSaldoEspecial());
alert("Cliente: " + nCorrente.getNome() + "\nBanco: " + nCorrente.getBanco() + "\nConta Corrente:  " + nCorrente.getNumeroConta() + "\nSaldo Disponível: " + nCorrente.getSaldo() + "\nCheque Especial: " + nCorrente.getSaldoEspecial());
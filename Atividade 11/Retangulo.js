class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
    //Getter
    get area() {
        return this.calculaArea()
    }

    calculaArea() {
        return this.altura * this.largura;
    }
}

const retangulo = new Retangulo(50, 10);
alert("Se altura do retângulo for 10. \n E a largura for 50. \nA área do retângulo medirá: " + retangulo.area);
alert("Pois calculamos a área de um retângulo multiplicando sua altura pela sua largura :)");
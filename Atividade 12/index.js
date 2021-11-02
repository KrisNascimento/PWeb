function mouseEmCima(obj) {
    obj.src = 'janelaaberta.png';
    alert('Mouse em cima da imagem = Janela Aberta');
}

function mouseFora(obj) {
    obj.src = 'janelaFechada.png';
    alert('Mouse em fora da imagem = Janela Fechada');
}

function mouseClick(obj) {
    obj.src = 'janelaquebrada.png';
    alert('Click na imagem = Janela Quebrada');
}
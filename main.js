var calculadora = document.getElementById("calculadora");

var resBoxDiv = document.createElement('div');
calculadora.appendChild(resBoxDiv);

var resBox = document.createElement('input');
resBox.setAttribute('readOnly','true');
resBox.type = 'number';

resBoxDiv.appendChild(resBox);

//Botões de 0 a 9
var botoes = [];

//Valores "cache" da calculadora
var oldNum = null;
var newNum = null;

//Tipo de calculo que sera feito
var acao = "";

for (i = 0; i < 10; i++) {
    botoes[i] = document.createElement('button');
    botoes[i].innerText = i;
    botoes[i].id = i;
    botoes[i].addEventListener('click',function(e) {
        resBox.value = resBox.value + e.target.id;
    });
    calculadora.appendChild(botoes[i]);
}

function criaBotao(txt) {
    btn = document.createElement('button');
    btn.innerText = txt;
    calculadora.appendChild(btn);

    return btn;
}

var btnMais = criaBotao('+');
btnMais.addEventListener('click',function() {
    oldNum = resBox.value;
    acao = 'somar';
    resBox.value = '';
});

var btnMenos = criaBotao('-');
btnMenos.addEventListener('click',function() {
    oldNum = resBox.value;
    acao = 'subtrair';
    resBox.value = '';
})

var btnVezes = criaBotao('x');
btnVezes.addEventListener('click',function() {
    oldNum = resBox.value;
    acao = 'multiplicar';
    resBox.value = '';
});

var btnDiv = criaBotao('/');
btnDiv.addEventListener('click',function() {
    oldNum = resBox.value;
    acao = 'dividir';
    resBox.value = '';
});

var btnIgual = criaBotao('=');
btnIgual.addEventListener('click',function() {
    newNum = parseFloat(resBox.value);
    switch(acao) {
        case 'somar':
            resBox.value = parseFloat(oldNum) + parseFloat(newNum);
            oldNum = resBox.value;
            break;
        case 'subtrair':
            resBox.value = parseFloat(oldNum) - parseFloat(newNum);
            oldNum = resBox.value;
            break;
        case 'multiplicar':
            resBox.value = parseFloat(oldNum) * parseFloat(newNum);
            oldNum = resBox.value;
            break;
        case 'dividir':
            resBox.value = parseFloat(oldNum) / parseFloat(newNum);
            oldNum = resBox.value;
            break;
    }
});

var btnLimpa = criaBotao('AC');
btnLimpa.addEventListener('click',function() {
    oldNum = null;
    newNum = null;
    acao = '';
    resBox.value = null;
})
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
var v1 = 0;
var v2 = 0;

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
    if (acao != '') {
        btnIgual.click();
    } else {
        v1 = resBox.value;
        resBox.value = null;
        acao = 'somar';
    }
});

var btnMenos = criaBotao('-');
btnMenos.addEventListener('click',function() {
    v1 = resBox.value;
    resBox.value = null;
    acao = 'subtrair';
})

var btnVezes = criaBotao('x');
btnVezes.addEventListener('click',function() {
    v1 = resBox.value;
    resBox.value = null;
    acao = 'multiplicar';
});

var btnDiv = criaBotao('/');
btnDiv.addEventListener('click',function() {
    v1 = resBox.value;
    resBox.value = null;
    acao = 'dividir';
});

var btnIgual = criaBotao('=');
btnIgual.addEventListener('click',function() {
    v2 = resBox.value;
    switch(acao) {
        case 'somar':
            v1 = parseFloat(v1) + parseFloat(v2);
            resBox.value = v1;
            break;
        case 'subtrair':
            resBox.value = parseFloat(v1) - parseFloat(v2);
            break;
        case 'multiplicar':
            resBox.value = parseFloat(v1) * parseFloat(v2);
            break;
        case 'dividir':
            resBox.value = parseFloat(v1) / parseFloat(v2);
            break;
    }
});

var btnLimpa = criaBotao('AC');
btnLimpa.addEventListener('click',function() {
    v1 = 0;
    v2 = 0;
    resBox.value = '';
})
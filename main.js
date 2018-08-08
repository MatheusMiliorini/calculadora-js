var calculadora = document.getElementById("calculadora");

var resBoxDiv = document.createElement('div');
calculadora.appendChild(resBoxDiv);

var resBox = document.createElement('input');
resBox.setAttribute('readOnly','true');
resBox.type = 'number';

resBoxDiv.appendChild(resBox);

//Botões de 0 a 9
var botoes = [];

//Expressão algébrica que será passada para a função "eval"
var exp = "";

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
    exp += resBox.value + "+";
    resBox.value = "";
});

var btnMenos = criaBotao('-');
btnMenos.addEventListener('click',function() {
    exp += resBox.value + "-";
    resBox.value = "";
})

var btnVezes = criaBotao('x');
btnVezes.addEventListener('click',function() {
    exp += resBox.value + "*";
    resBox.value = "";
});

var btnDiv = criaBotao('/');
btnDiv.addEventListener('click',function() {
    exp += resBox.value + "/";
    resBox.value = "";

});

var btnIgual = criaBotao('=');
btnIgual.addEventListener('click',function() {
    exp += resBox.value
    resBox.value = eval(exp);
    console.log(exp);
});

var btnLimpa = criaBotao('AC');
btnLimpa.addEventListener('click',function() {
    exp = "";
    resBox.value = "";
})
var calculadora = document.getElementById("calculadora");

var resBoxDiv = document.createElement('div');
calculadora.appendChild(resBoxDiv);

var resBox = document.createElement('input');
resBox.setAttribute('readOnly','true');
resBox.type = 'text';
resBox.id = "resBox";

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
    if (i == 5) {
        //Cria o botão de mais, menos e C aqui, só pra ficar certinho
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

        var btnC = criaBotao('C');
        btnC.addEventListener('click',function() {
            resBox.value = "";
        })
        //Pula linha
        calculadora.appendChild(document.createElement('br'));
    }
    
}

var btnVirgual = criaBotao('.');
    btnVirgual.addEventListener('click',function() {
        resBox.value += ".";
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
    exp = "";
});

var btnAC = criaBotao('AC');
btnAC.addEventListener('click',function() {
    exp = "";
    resBox.value = "";
})

function criaBotao(txt) {
    btn = document.createElement('button');
    btn.innerText = txt;
    calculadora.appendChild(btn);

    return btn;
}
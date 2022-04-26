var jogador, vencedor = null;
var jogador_selecionado = document.getElementById('jogador-selecionado');
var vencedor_selecionado = document.getElementById('vencedor');
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherq(id){


    if(vencedor != null){

        return
    }

    var quadrado = document.getElementById(id)
    if( quadrado.innerHTML !== '-'){

        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = "000";

    if(jogador === 'X'){

        jogador = 'O';
    }else{

        jogador = 'X';
    }

    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor){

    jogador = valor;
    jogador_selecionado.innerHTML = jogador;
}

function checaVencedor(){

    var quadrado1 = document.getElementById('1');
    var quadrado2 = document.getElementById('2');
    var quadrado3 = document.getElementById('3');
    var quadrado4 = document.getElementById('4');
    var quadrado5 = document.getElementById('5');
    var quadrado6 = document.getElementById('6');
    var quadrado7 = document.getElementById('7');
    var quadrado8 = document.getElementById('8');
    var quadrado9 = document.getElementById('9');

    if(checaSeq(quadrado1, quadrado2, quadrado3)){

        mudarCorq(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return
    }

    if(checaSeq(quadrado4, quadrado5, quadrado6)){

        mudarCorq(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return
    }

    if(checaSeq(quadrado7, quadrado8, quadrado9)){

        mudarCorq(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return
    }

    if(checaSeq(quadrado1, quadrado4, quadrado7)){

        mudarCorq(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado4);
        return
    }

    if(checaSeq(quadrado2, quadrado5, quadrado8)){

        mudarCorq(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return
    }

    if(checaSeq(quadrado3, quadrado6, quadrado9)){

        mudarCorq(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return
    }

    if(checaSeq(quadrado1, quadrado5, quadrado9)){

        mudarCorq(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return
    }

    if(checaSeq(quadrado3, quadrado5, quadrado7)){

        mudarCorq(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3)
        
    }

}

function mudarVencedor(quadrado){

    vencedor = quadrado.innerHTML;
    vencedor_selecionado.innerHTML = vencedor;
}

function mudarCorq(quadrado1, quadrado2, quadrado3){

    quadrado1.style.background = '#836FFF'
    quadrado2.style.background = '#836FFF'
    quadrado3.style.background = '#836FFF'

}

function checaSeq(quadrado1, quadrado2, quadrado3){

    var igual = false;

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML == quadrado2.innerHTML && quadrado2.innerHTML == quadrado3.innerHTML){

        igual = true;
    }

    return igual;
}

function reiniciar(){

    vencedor = null;
    vencedor_selecionado.innerHTML = '';

    for( var i = 1; i <= 9; i++){
        
        var quadrado = document.getElementById(i);
        quadrado.style.background = 'aquamarine';
        quadrado.style.color = '#000';
        quadrado.innerHTML = '-'
    }

    mudarJogador('X');
}



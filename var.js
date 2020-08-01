//Hoisting
//Em JavaScript, toda variável é “elevada/içada” (hoisting) até o topo do seu contexto de execução. Esse mecanismo move as variáveis para o topo do seu escopo antes da execução do código.
//No nosso exemplo, como a variável mensagemDentroDoIf está dentro de uma function, a declaração da mesma é elevada (hoisting) para o topo do seu contexto, ou seja, para o topo da function.
//É por esse mesmo motivo que “é possível usar uma variável antes dela ter sido declarada”: em tempo de execução a variável será elevada (hoisting) e tudo funcionará corretamente.

//No caso da palavra-chave var, além da variável ser içada (hoisting) ela é automaticamente inicializada com o valor undefined (caso não seja atribuído nenhum outro valor).

var exibeMensagem = function() { 
    var mensagemForaDoIf = 'Fora'; 

    if (true) { 
        var mensagemDentroDoIf = 'Dentro'; 
        console.log(mensagemDentroDoIf)
    } 

    console.log(mensagemForaDoIf);
    console.log(mensagemDentroDoIf);
}

exibeMensagem(); //Exibe o valor da variável mesmo ela tendo sido declarada  dentro do if.

/**/

var exibeMensagem = function() { 
    mensagem = 'Alura'; 
    console.log(mensagem); 
    var mensagem;
}

exibeMensagem(); //Exibe o valor da variável mesmo ela sendo declarada após a mesma ter sido usada. 
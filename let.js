var exibeMensagem = function() {

    if(true) { 
        var escopoFuncao = 'Função'; 
        let escopoBloco = 'Bloco';

       console.log(escopoBloco);
   } 

   console.log(escopoFuncao);

   console.log(escopoBloco); 
}

exibeMensagem(); //Não vai exibir a variável “escopoBloco” pois a declaração com “let” limita a variável ao escopo em que ela foi declarada.
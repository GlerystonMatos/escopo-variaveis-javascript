//Como não iniciamos a variável a mesma será exibida como indefinida.

void function(){ 
    let mensagem; 
    console.log(mensagem);
}();

//Usando “const” obrigamos que a variável seja iniciada logo na sua declaração. 

void function(){ 
    const mensagem = 'constante'; 
    console.log(mensagem);
    mensagem = 'mudar valor'; 
}();

//Caso tente declarar  uma variável com “const” sem inicializar a mesma, será retornado um erro.

const idade = 18;
const pi;
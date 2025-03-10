// 1. Utilize o comando de repetição “while”, para solicitar que o usuário informe um número. O programa deve continuar executando até que o usuário digite o número 3, momento em que deverá se encerrar.

let numero;
while(numero != 3) {
    numero = prompt('Qual o número?');
}

// 2. Crie um programa utilizando o loop "do...while" para solicitar a senha de acesso ao usuário. O usuário terá um limite de três tentativas para inserir a senha correta.
// a) Se a senha for inserida corretamente dentro do limite de tentativas, exiba a mensagem: "Acesso concedido!"
// b) Caso contrário, exiba a mensagem: "Senha bloqueada!"

let chute;
let tentativas = 1;
let senha = 123;

do {
    chute = prompt('Qual a senha?');
    tentativas++;
        if(chute == senha) {
            alert('Acesso concedido!');
            break;
        } if(tentativas == 4) {
            alert('Senha bloqueada!');
            break;
        }
    }
    while(tentativas < 4);

// 3. Crie uma lista contendo 4 números e, em seguida, exiba todos os números na tela.
    let listaDeNumeros = [1, 2, 3, 4];
    alert(listaDeNumeros);

// 4. Solicite ao usuário cinco números, armazene-os em uma lista e, em seguida, exiba todos os números na tela.

    let listaCompleta = [];
    let = tamanhoLista = 0;

    while(tamanhoLista != 5) {
        numeroDado = prompt('Digite um número');
        listaCompleta.push(numeroDado);
        tamanhoLista++;
    }
    alert(listaCompleta);

// 5. Crie uma função sem parâmetros que retorne uma mensagem personalizada de sua preferência.
    
    function mensagemPersonalizada() {
        return('Essa é a mensagem personalizada da função da quinta questão');
    }
    alert(mensagemPersonalizada());

// 6. Crie uma função que receba um nome como parâmetro e retorne uma mensagem personalizada no seguinte formato: "Olá, (nome), que bom ter você no programa Trilhas."

   function nomeComoParametro(nomeParametro) {
   return `Olá, ${nomeParametro}, que bom ter você no programa Trilhas.`;
}
let nomeParametro = prompt('Qual o seu nome?');
alert (nomeComoParametro(nomeParametro));

// 7. Crie uma função chamada calcularQuadrado que receba um número como parâmetro e retorne o quadrado desse número.

function calcularQuadrado(numerocomoParametro) {
    return numerocomoParametro *numerocomoParametro;
}
numerocomoParametro = prompt('digite um número');
alert(`O número ao quadrado é ${calcularQuadrado(numerocomoParametro)}`);

// 8. Crie uma função chamada Subtracao que receba dois números como parâmetros e retorne o resultado da subtração entre eles.

function subtração(numero1, numero2) {
    return numero1 - numero2;
}
numero1 = prompt('Digite o primeiro número que deseja subtrair');
numero2= prompt('Digite o segundo número que deseja para a subtração');
alert(`O resultado da subtração é ${subtração(numero1, numero2)}`);


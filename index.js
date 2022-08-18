let prompt = require('prompt-sync')();

function Calcular(x) {

    switch (x) {

        case '+':
            let soma = valor1 + valor2;
            return (`O resultado da sua soma é ${soma} `)
            break;

        case '-':
            let sub = valor1 - valor2;
            return (`O resultado da sua subtração é: ${sub} `) ;
            break;

        case '*':
            let mult = valor1 * valor2;
            return (`O resultado da sua multiplicação é ${mult} `) ;
            break;

        case '/':
            let sobra = valor1 % valor2;
            if (sobra != 0) {
                let div = parseInt(valor1 / valor2);
                return (`O resultado da divisão é ${div} restando ${sobra}`)

            } else {
                let div = valor1/valor2;
                return (`O resultado da sua divisão é ${div} `);
            }
            break;

        default:
            console.log("Operador Inválido!")

    }
}

let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));
let op = prompt("Agora digite o operador desejado para o cálculo( + , - , * ou / ): ");
console.log(Calcular(op));
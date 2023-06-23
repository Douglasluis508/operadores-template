//CODIGO AQUI

// let saldo = 15 // saldo inicial

// saldo += 22.40 
// console.log(saldo); // saldo atualizado saldo somado com 22.40 =37.40

// saldo -= 12.34
// console.log(saldo); // saldo atualizado subtraido por 12.34 = 25.06

// saldo /= 2
// console.log(saldo); // saldo divido por 2 = 12.53

// saldo *= 3.40
// console.log(saldo); // saldo multiplicado por 3.40 = 42.602

// saldo %= 3
// console.log(saldo); // resto do saldo dividido em partes iguais = 0.601....


// const teste = 2*2+2
// console.log(teste);

// const teste2 = 2*(2+2)
// console.log(teste2);

// const comp1 = 5 === 5;
// const comp2 = 5!== 5;
// const comp3 = 5 !== '5';
// const comp4 = '5' === 'cinco';
// const comp5 = typeof 5 === typeof 20;
// const comp6 = typeof '5' === typeof 'cinco';
// console.log(comp1, comp2, comp3, comp4, comp5, comp6)


// const numero1 = 10;
// const numero2 = 20;

// console.log(numero1 === numero2); // false
// console.log(numero1 <= numero2); // true
// console.log(numero1 > numero2);// false
// console.log(numero1 < numero2);// true

let idade =Number(prompt('Qual sua idade?'));
let idadeAmigo =Number(prompt('Qual a idade do seu amigo?'));
let diferencaIdade = idade - idadeAmigo;
console.log(`Sua idade é maior que a do seu amigo? diferença de idade: ${diferencaIdade} ${idade <= idadeAmigo}`);

// Exercício 1
let numS = parseInt(Math.random()*101);
console.log(`O numero sorteado é = ${numS}`);
console.log(`Seu sucessor é = ${numS + 1}`);
console.log(`Seu antecessor é = ${numS - 1}`);
console.log(`Seu dobro é = ${numS * 2}`);
console.log(`Seu sucessor é = ${numS / 2}`);

console.log(`============================================`);

//Exercício 2
let m = 0
let n1 = parseInt(Math.random()*11);
let n2 = parseInt(Math.random()*11);
let n3 = parseInt(Math.random()*11);
let n4 = parseInt(Math.random()*11);
console.log(`As 4 notas são = ${n1}, ${n2}, ${n3}, ${n4}`);
console.log(`A média das 4 notas é =  ${m = ((n1+n2+n3+n4) / 4) }`)

console.log(`============================================`);

//Exercício 3 

let numC = parseInt(Math.random()*101);
let numF = (9/5 * numC) + 32
console.log(`A temperatura em Celsius é = ${numC}`);
console.log(`A temperatura em Fahrenheit é = ${numF}`);

console.log(`============================================`);

//Exercício 4

let CalcaVendida = parseInt(Math.random()*201);
let salario = 1500;
console.log(`Salário mensal do vendedor = ${salario + CalcaVendida*35}`);

console.log(`============================================`);

//Exercício 5

let Altura = parseInt(Math.random()*26);
let Base = parseInt(Math.random()*26);
let Area = (Base * Altura)/2;
console.log(`A altura é = ${Altura}`);
console.log(`A Base é = ${Base}`);
console.log(`A Área é = ${Area}`);

console.log(`============================================`);

//Exercício 6

let horasT = parseInt(Math.random()*251);
let dependentes = parseInt(Math.random()*7);
let salarioB = ((horasT * 168) + (dependentes * 80))
let descontoINSS = salarioB * 0.085
let descontoIR = salarioB * 0.05
let salarioF = ((salarioB - descontoIR) - descontoINSS)
console.log(`O salário bruto é = ${salarioB}`);
console.log(`O desconto de IR é = ${descontoIR}`);
console.log(`O desconto de INSS é = ${descontoINSS}`);
console.log(`O salário final é = ${salarioF}`);

console.log(`============================================`);

//Exercício 7

let peso = parseInt(Math.random()*201);
console.log(`O peso da pessoa é = ${peso}`);
console.log(`O peso da pessoa após emagrecer 20% é = ${peso*0.8}`);
console.log(`O peso da pessoa após engordar 20% é = ${peso*1.2}`);

console.log(`============================================`);

//Exercício 8 

let a = parseInt(Math.random()*6);
let b =  parseInt(Math.random()*6);
let c = parseInt(Math.random()*6);
let x = parseInt(Math.random()*6);
let fx = (((a*x)*(a*x)) + (b*x) + c);
console.log(`o valor de a é = ${a}`);
console.log(`o valor de b é = ${b}`);
console.log(`o valor de c é = ${c}`);
console.log(`o valor de x é = ${x}`);
console.log(`o valor da função é = ${fx}`);

console.log(`============================================`);

//Exercício 9 

let NumAle = parseInt(Math.random()*101);

console.log(`o número é = ${NumAle}`);

if (NumAle % 2 === 0){
    console.log(`é par, então seu quadrado é, ${NumAle*NumAle}`);
}
else {
    console.log(`é impar, então seu cubo é, ${NumAle*NumAle*NumAle}`);
}

console.log(`============================================`);

//Exercício 10

let Num1 = parseInt(Math.random()*101);
let Num2 = parseInt(Math.random()*101);
let V= 0
console.log(`Os números sorteados foram ${Num1} e ${Num2}`);
if(Num1 + Num2 <= 100) {
    V = (Num1 + Num2) * 3
  console.log(`${Num1} + ${Num2} depois disso * 3 = ${V}`);
} else {
  V = (Num1 + Num2) * 5
  console.log(`${Num1} + ${Num2} depois disso * 5 = ${V}`);
}

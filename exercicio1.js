
const readline = require("readline");
	
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const provas = []


rl.question("Digite seu nome: ", (input1) => {
 const nome = parseFloat(input1);
 provas.push(nome);

  rl.question("Digite sua idade ", (input2) => {
 const idade = parseFloat(input2);
 provas.push(idade);

   console.log("Seja muito bem-vindo(a)!");
  rl.close();

})
})
	
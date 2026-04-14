const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    
});

rl.setPrompt('seu nome: ');
rl.prompt()

let entradaUsuario = ''

rl.on('line', (input) => {
    entradaUsuario = input.toString()
    console.log('seu nome é: ' + entradaUsuario);
    rl.close()
})
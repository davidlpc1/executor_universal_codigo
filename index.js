const { exec } = require('shelljs');
const readline = require('readline-sync');

console.log("Executor universal de código")
console.log("Você precisará de NodeJS,Java e Python e TypeScript instalados")

const codeWillContinue = readline.question('Deseja continuar (yes/no): ')
if(codeWillContinue.match(/no/gi) !== null || codeWillContinue.match(/nao/gi) !== null) {
    codeWillContinue.exit(0);
}

const separeOutput = () => console.log('-----------------------------------------------------------------------------')
const showResultOfCoding = (language,code) => {
    console.log(`Código ${language} stdout: ${code.stdout}`)
    separeOutput()
    console.log(`Código ${language} stderr: ${code.stderr}`)
    separeOutput()
}

const requestJS = readline.question('Insira o codigo JavaScript: ')
const codigoJS = exec(`node -p "${requestJS}"`,{ silent: true})
showResultOfCoding('JavaScript',codigoJS)

const requestTS = readline.question('Insira o codigo TypeScript:')
const codigoTS = exec(`echo ${requestTS} > main.ts && tsc main.ts && node main.js`,{ silent: true})
showResultOfCoding('TypeScript',codigoTS)

const requestPython = readline.question('Insira o codigo Python: ')
const codigoPython = exec(`echo ${requestPython} > arquivo.py && python arquivo.py`,{ silent: true});
showResultOfCoding('Python',codigoPython)

const requestJava = readline.question('Insira o codigo Java: ')
const codigoJava = exec(`echo ${requestJava} > Main.java && javac Main.java && java Main`,{ silent: true})
showResultOfCoding('Java',codigoJava)
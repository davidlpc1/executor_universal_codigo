const { exec } = require('shelljs');
const readline = require('readline-sync');

console.log("Executor universal de código")
console.log("Você precisará de NodeJS,Java e Python e TypeScript instalados")

const codeWillContinue = readline.question('Deseja continuar (yes/no): ')
if(codeWillContinue.match(/n/gi) !== null) {
    process.exit(0);
}

const showResultOfCoding = (language,code) => {
    console.log(`Código ${language} stdout: ${code.stdout}`)
    console.log('-----------------------------------------------------------------------------')
    console.log(`Código ${language} stderr: ${code.stderr}`)
    console.log('-----------------------------------------------------------------------------')
}

const willUseThis = (language,callback) => {
    const willUseThatLanguage = readline.question(`Deseja usar ${language} (yes/no): `)
    if(willUseThatLanguage.match(/y/) !== null || willUseThatLanguage.match(/s/) !== null) {
        callback();
    }
}

const takeCodeAndRunThat = (language,codeToRun) => {
    willUseThis(language,() => {
        const request = readline.question(`Insira o codigo ${language}: `)
        const code = exec(codeToRun(request),{ silent: true})
        showResultOfCoding(language,code)
    })
}

const languages = [
    { name:'JavaScript',codeToRun:(request) => `node -p "${request}"`},
    { name:'TypeScript',codeToRun:(request) => `echo ${request} > main.ts && tsc main.ts && node main.js`},
    { name:'Python',codeToRun:(request) => `echo ${request} > arquivo.py && python arquivo.py`},
    { name:'Java',codeToRun:(request) => `echo ${request} > Main.java && javac Main.java && java Main`}
]
languages.forEach(({name,codeToRun}) => takeCodeAndRunThat(name,codeToRun))
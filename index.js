const { exec } = require('shelljs');
console.log("Executor universal de código")

const requestJS ="console.log('Resultado:',3 + 4)";
const codigoJS = exec(`node -p "${requestJS}"`,{ silent: true})

const requestPython = "print('Hello world')"
const codigoPython = exec(`echo ${requestPython} > arquivo.py && python arquivo.py`,{ silent: true});

const { log } = console;

log(`Código Python stdout: ${codigoPython.stdout}`)
log('-----------------------------------------------------------------------------')
log(`Código Python stderr: ${codigoPython.stderr}`)
log('-----------------------------------------------------------------------------')
log(`Código JavaScript stdout: ${codigoJS.stdout}`)
log('-----------------------------------------------------------------------------')
log(`Código JavaScript stderr: ${codigoJS.stderr}`)
log('-----------------------------------------------------------------------------')
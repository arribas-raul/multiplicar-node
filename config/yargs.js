const options = {
     base: {
          demand: true,
          alias: 'b'
     },
     limite: {
          alias: 'l',
          default: 10
     }
};

const argv = require('yargs')
          .command('listar', 'Imprime por consola la tabla de multiplicar', options)  
          .command('crear', 'Genera un archivo la tabla de multiplicar', options) 
          .help()
          .argv;

module.exports = {
     argv
}
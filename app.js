//requires
//const fs = require('fs'); /*Libreria que existe en node*/
//const fs = require('express'); /*No es una libreria de node, es un paquete externo*/
//const fs = require('./fs');  /*Archivos propios*/
//console.log(module);
//console.log(process);
//console.log(process.argv);
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
     case 'listar':
          console.log('listar');
          listarTabla(argv.base, argv.limite)
               .then(success => console.log(success))
               .catch(error => console.log(error));
          break;
     
     case 'crear':
          console.log('crear');
          crearArchivo(argv.base, argv.limite)
               .then(archivo => console.log(`Archivo creado: ${colors.blue(archivo)}`))
               .catch(error => console.log(error));
          break;
     
     default: console.log('Comando no reconocido');


}

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log('Limite', argv.limite);
//console.log(argv2);


//console.log(base);

//let base = 1;

//console.log(argv);




/* crearArchivo(base)
     .then(archivo => console.log(`Archivo creado: ${archivo}`))
     .catch(error => console.log(error));  */

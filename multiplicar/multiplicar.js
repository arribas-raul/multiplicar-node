//require
const fs = require('fs'); 
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
     return new Promise((resolve, reject) => {

          console.log('======================='.green);
          console.log(`tabla de ${base}`.green);
          console.log('======================='.green);

          if(!Number(base)){
               reject(`El valor base introducido ${base} no es un número`);
               return;
          }

          if(!Number(limite)){
               reject(`El valor limite introducido ${limite} no es un número`);
               return;
          }

          for (let i= 1; i <= limite; i++){
               console.log(`${base} * ${i} = ${base * i}\n`);
          }

          return resolve('Lista finalizada');
     });
}

//module.exports.crearArchivo = (base)=>{
let crearArchivo = (base, limite = 10)=>{    
     return new Promise((resolve, reject) => {

          if(!Number(base)){
               reject(`El valor base introducido ${base} no es un número`);
               return;
          }

          if(!Number(limite)){
               reject(`El valor limite introducido ${limite} no es un número`);
               return;
          }

          
          let data = '';

          for (let i= 1; i<=limite; i++){
               data += `${base} * ${i} = ${base * i}\n`;
          }
          
          fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
               if (err){
                    reject(err);
               
               }else{
                    resolve(`tabla-${base}-al-${limite}.txt`);
               }
          });
     });
}

module.exports = {
     crearArchivo,
     listarTabla
}


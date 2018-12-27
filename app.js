const { crearArchivo, listarTabla } = require('./model/model');
const argv = require("./config/yargs").argv;
const colors = require("colors");

let comando = argv._[0];
 
switch(comando){
    case 'listar':
        listarTabla(argv.base,argv.limite);
    break;
    case 'crear':
        crearArchivo(argv.base,argv.limite).then((res) => {
            console.log(res);
        }).catch(err => console.log(err)); 
    break;
    default:
        console.log(`Comando ${comando.toUpperCase()} no reconocido`)
}


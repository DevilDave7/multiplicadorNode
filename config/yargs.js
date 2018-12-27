
let opts = {
    base:{
        demand: true,
        alias : 'b'
    },
    limite:{
        alias: 'l',
        default : 10
    }
}

const argv = require('yargs')
.command('listar','Imprime en consola la tabla de la base otorgada',opts)
.command('crear','Crea un archivo con la tabla especificada', opts)
.help()
.argv;

module.exports = {
    argv
}
const fs = require('fs');
const colors = require("colors");

var listarTabla = (base,limite)=>{

    console.log(`*********************************`.green);
    console.log(`********** Tabla del ${base} **********`.yellow);
    console.log(`*********************************`.green);

    for(let i = 1; i <= limite; i++){
        console.log(`${base} * ${i} = ${base*i}`)
    }
}

var crearArchivo = (base,limite) => {

    return new Promise((res,rej)=>{
        let data = '';

        if(!Number(base)){
            rej(`Esto '${ base }' no es un numero`);
            return;
        } 

        for(let i = 1;i <=limite; i++){
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`./tablas/tabla_${base}.txt`,data,(err)=>{
            if(err) rej(err);
            res('Archivo'+colors.green(` tabla-${base}.txt `)+'creado' );
        })
    })
    
}

module.exports = {
    crearArchivo,
    listarTabla
}


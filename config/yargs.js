const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Crea un archivo .txt con la base y el limite', opciones)
    .help()
    .argv;


const { crearArchivo, listarTabla } = require('../multiplicar/multiplicar');

let comando = argv._[0];

// switch (comando) {
//     case 'listar':
//         listarTabla(argv.base, argv.limite);
//         break;

//     case 'crear':
//         crearArchivo(argv.base, argv.limite)
//             .then(archivo => console.log(`Archivo creado: ${archivo}`))
//             .catch(e => console.log(e));
//         break;

//     default:
//         console.log('Comando no reconocido');
// }



module.exports = {
    argv
}
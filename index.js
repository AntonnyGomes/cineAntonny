// importar dependencias
const catalogo = require("./database/catalogo.json");
const mostrarFilmes = require("./functions/mostrarFilmes");
const buscarFilme = require('./functions/buscarFilme')
// definindo a ação a ser realizada
let acao = process.argv[2];
//definir qual acao
switch(acao){
    
    case 'mostrar':
        mostrarFilmes(catalogo);
    break;

    case 'buscar':
        let codigo = process.argv[3]
        let filmeEncotrado = buscarFilme(codigo)
        console.log(filmeEncotrado)
    break;

    case 'adicionar':
        console.log("vai adicionar um filme");
    break;

    default:
        console.error("Comando não encontrado");
}

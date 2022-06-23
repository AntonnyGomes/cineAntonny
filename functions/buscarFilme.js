// Arquivo buscarFilme.js

// Importar o catálogo de filmes
const catalogo = require('../database/catalogo.json');

module.exports = (codigoBuscado) => {

    function temCodigoIgualAoBuscado(filme){
        if(filme.codigo == codigoBuscado){
            return true;
        } else {
            return false;
        }
    }

    return catalogo.find(temCodigoIgualAoBuscado);
    
}
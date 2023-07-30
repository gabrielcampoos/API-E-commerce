"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarProdutos = void 0;
const Produtos_1 = require("../../repository/Produtos");
class ListarProdutos {
    constructor(filtrosQuery) {
        this.filtro = filtrosQuery;
    }
    execute() {
        const repository = new Produtos_1.ProdutosRepository();
        const retorno = repository.listagemProdutos(this.filtro);
        if (!retorno.length) {
            return {
                mensagem: "Nenhum produto encontrado com o parametro citado",
                sucesso: false,
                produtos: [],
            };
        }
        return {
            mensagem: "Produtos listados com sucesso",
            sucesso: true,
            produtos: retorno,
        };
    }
}
exports.ListarProdutos = ListarProdutos;

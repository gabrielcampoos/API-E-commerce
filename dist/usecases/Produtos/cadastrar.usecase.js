"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdicionarProduto = void 0;
const Produtos_1 = require("../../repository/Produtos");
class AdicionarProduto {
    constructor(dados) {
        this.dados = dados;
    }
    execute() {
        const repository = new Produtos_1.ProdutosRepository();
        if (repository.verificarNumeroDeSerie(this.dados.numeroSerie)) {
            return {
                sucesso: false,
                mensagem: "O produto já possui número de série cadastrado.",
            };
        }
        if (this.dados.preco <= 0) {
            return {
                sucesso: false,
                mensagem: "O preço precisa ter um valor positivo e diferente de zero.",
            };
        }
        const novoProduto = repository.cadastrarProduto(this.dados);
        return {
            sucesso: true,
            mensagem: "Novo produto adicionado com sucesso.",
            produtoCadastrado: novoProduto,
        };
    }
}
exports.AdicionarProduto = AdicionarProduto;

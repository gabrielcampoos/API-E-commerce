"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(dados) {
        this.id = dados.id;
        this.categorias = [];
        this.preco = dados.preco;
        this.quantidadeEstoque = 0;
        this.nome = dados.nome;
        this.descricao = dados.descricao;
        this.numeroSerie = dados.numeroSerie;
        this.ativo = true;
    }
    adicionarEstoque(novaQuantidade) {
        this.quantidadeEstoque += novaQuantidade;
    }
    editarDados(dados) {
        this.nome = dados.nome || this.nome;
        this.preco = dados.preco || this.preco;
        this.descricao = dados.descricao || this.descricao;
    }
    editarCategorias(id, categoria, acao) {
        switch (acao) {
            case "adicionar":
                if (!categoria) {
                    throw new Error("Categoria não encontrada.");
                }
                this.categorias.push(categoria);
                break;
            case "excluir":
                if (!id) {
                    throw new Error("Categoria não informada.");
                }
                const index = this.categorias.indexOf(id);
                this.categorias.splice(index, 1);
                break;
            default:
                throw new Error("A ação é inválida.");
        }
    }
    aplicarDesconto(metodo, valor) {
        if (valor <= 0) {
            throw new Error("O valor deve ser maior que zero.");
        }
        switch (metodo) {
            case "porcentagem":
                if (valor >= 100) {
                    throw new Error("O valor de porcentagem deve ser menor que 100");
                }
                this.preco -= (this.preco * valor) / 100;
                break;
            case "valor":
                if (valor >= this.preco) {
                    throw new Error("O valor informado para o desconto excede o valor do produto.");
                }
                this.preco -= valor;
                break;
        }
    }
    toJSON() {
        return {
            id: this.id,
            nome: this.nome,
            descricao: this.descricao,
            preco: this.preco,
            numeroSerie: this.numeroSerie,
            quantidade: this.quantidadeEstoque,
            categorias: this.categorias,
            ativo: this.ativo,
        };
    }
}
exports.Produto = Produto;

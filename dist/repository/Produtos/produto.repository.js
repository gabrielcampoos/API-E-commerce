"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosRepository = void 0;
const crypto_1 = require("crypto");
const classes_1 = require("../../classes");
const database_1 = require("../../database");
class ProdutosRepository {
    verificarNumeroDeSerie(numeroSerie) {
        return database_1.produtos.some((p) => p.toJSON().numeroSerie === numeroSerie);
    }
    cadastrarProduto(produto) {
        const { preco, nome, descricao, numeroSerie } = produto;
        const novoProduto = new classes_1.Produto({
            id: (0, crypto_1.randomUUID)(),
            descricao,
            preco,
            nome,
            numeroSerie,
        });
        database_1.produtos.push(novoProduto);
        return novoProduto;
    }
    listagemProdutos(filtros) {
        const { ordem_nome, nome_produto, ordem_preco, valor_max, valor_min } = filtros;
        let listaCopia = [...database_1.produtos];
        if (valor_max) {
            listaCopia = listaCopia.filter((produto) => produto.toJSON().preco <= valor_max);
        }
        if (valor_min) {
            listaCopia = listaCopia.filter((produto) => produto.toJSON().preco <= valor_min);
        }
        if (ordem_nome) {
            if (ordem_nome === "cresc") {
                listaCopia = listaCopia.sort((a, b) => {
                    if (a.toJSON().nome > b.toJSON().nome) {
                        return 1;
                    }
                    if (a.toJSON().nome < b.toJSON().nome) {
                        return -1;
                    }
                    return 0;
                });
            }
            else {
                listaCopia = listaCopia.sort((a, b) => {
                    if (a.toJSON().nome < b.toJSON().nome) {
                        return 1;
                    }
                    if (a.toJSON().nome > b.toJSON().nome) {
                        return -1;
                    }
                    return 0;
                });
            }
        }
        if (ordem_preco) {
            if (ordem_preco === "cresc") {
                listaCopia = listaCopia.sort((a, b) => {
                    if (a.toJSON().preco > b.toJSON().preco) {
                        return 1;
                    }
                    if (a.toJSON().preco < b.toJSON().preco) {
                        return -1;
                    }
                    return 0;
                });
            }
            else if (ordem_preco) {
                listaCopia = listaCopia.sort((a, b) => {
                    if (a.toJSON().preco < b.toJSON().preco) {
                        return 1;
                    }
                    if (a.toJSON().preco > b.toJSON().preco) {
                        return -1;
                    }
                    return 0;
                });
            }
        }
        if (nome_produto) {
            listaCopia = listaCopia.filter((produto) => produto.toJSON().nome.startsWith(nome_produto));
        }
        return listaCopia;
    }
}
exports.ProdutosRepository = ProdutosRepository;

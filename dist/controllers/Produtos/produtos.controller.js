"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosController = void 0;
const Produtos_1 = require("../../usecases/Produtos");
const listar_usecase_1 = require("../../usecases/Produtos/listar.usecase");
class ProdutosController {
    criar(request, response) {
        const { nome, descricao, numeroSerie, preco } = request.body;
        const usecase = new Produtos_1.AdicionarProduto({
            nome,
            descricao,
            numeroSerie,
            preco,
        });
        const retorno = usecase.execute();
        if (!retorno.sucesso) {
            return response.status(400).send(retorno);
        }
        return response.status(201).send(retorno);
    }
    listar(request, response) {
        const filtros = request.query;
        const usecase = new listar_usecase_1.ListarProdutos({
            valor_max: Number(filtros.valor_max),
            valor_min: Number(filtros.valor_min),
            ordem_nome: filtros.ordem_nome,
            ordem_preco: filtros.ordem_preco,
            nome_produto: filtros.nome_produto?.toString(),
        });
        const retorno = usecase.execute();
        if (!retorno.sucesso) {
            return response.status(404).json(retorno);
        }
        return response.status(200).json(retorno);
    }
}
exports.ProdutosController = ProdutosController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCamposDeProduto = void 0;
function validarCamposDeProduto(request, response, next) {
    const { nome, preco, descricao, numeroSerie } = request.body;
    if (!nome || !preco || !descricao || !numeroSerie) {
        return response.status(400).send({
            sucesso: false,
            mensagem: "É preciso informar todas as propriedades para a criação do Produto",
            dados: null,
        });
    }
    next();
}
exports.validarCamposDeProduto = validarCamposDeProduto;

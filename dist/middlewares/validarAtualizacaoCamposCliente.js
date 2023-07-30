"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarAtualizacaoCamposCliente = void 0;
function validarAtualizacaoCamposCliente(request, response, next) {
    const { nome_completo, telefone, email } = request.body;
    if (!nome_completo && !telefone && !email) {
        return response.status(400).send({
            sucesso: false,
            mensagem: "É preciso informar ao menos uma propriedade a ser atualizada do Cliente.",
            dados: null,
        });
    }
    next();
}
exports.validarAtualizacaoCamposCliente = validarAtualizacaoCamposCliente;

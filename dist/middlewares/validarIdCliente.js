"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarIdCliente = void 0;
function validarIdCliente(request, response, next) {
    const { idCliente } = request.params;
    if (!idCliente) {
        return response.status(400).send({
            sucesso: false,
            mensagem: "É obrigatório informar o ID do cliente.",
            dados: null,
        });
    }
    next();
}
exports.validarIdCliente = validarIdCliente;

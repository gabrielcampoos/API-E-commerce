"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarTipoPreco = void 0;
function validarTipoPreco(request, response, next) {
    const { preco } = request.body;
    if (typeof preco === "string") {
        request.body.preco = Number(preco.replaceAll(".", "").replaceAll(",", "."));
    }
    if (isNaN(request.body.preco)) {
        return response.status(400).json({
            mensagem: "O dado informado para preço deve ser um número válido.",
            sucesso: false,
        });
    }
    if (typeof request.body.preco !== "number") {
        return response.status(400).json({
            mensagem: "O dado informado para preço deve ser um número válido.",
            sucesso: false,
        });
    }
    next();
}
exports.validarTipoPreco = validarTipoPreco;

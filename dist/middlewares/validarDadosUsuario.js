"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarDadosUsuario = void 0;
function validarDadosUsuario(request, response, next) {
    const dados = request.body;
    if (!dados.nome_completo) {
        return response.status(400).json({
            sucesso: false,
            motivo: 'É obrigatório informar o Nome Completo do cliente.',
        });
    }
    if (!dados.telefone) {
        return response.status(400).json({
            sucesso: false,
            motivo: 'É obrigatório informar o Telefone do cliente.',
        });
    }
    if (!dados.cpf) {
        return response.status(400).json({
            sucesso: false,
            motivo: 'É obrigatório informar o CPF do cliente.',
        });
    }
    if (!dados.email) {
        return response.status(400).json({
            sucesso: false,
            motivo: 'É obrigatório informar o E-mail do cliente.',
        });
    }
    if (!dados.senha) {
        return response.status(400).json({
            sucesso: false,
            motivo: 'É obrigatório informar o Senha do cliente.',
        });
    }
    next();
}
exports.validarDadosUsuario = validarDadosUsuario;

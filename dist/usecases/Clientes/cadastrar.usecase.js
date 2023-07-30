"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastrarCliente = void 0;
const Clientes_1 = require("../../repository/Clientes");
class CadastrarCliente {
    constructor(dados) {
        this.dados = dados;
    }
    execute() {
        // REGRA DE NEGOCIO - não pode existir dois clientes com o mesmo CPF
        const repository = new Clientes_1.ClientesRepository();
        if (repository.existeCPFCadastrado(this.dados.cpf)) {
            return {
                sucesso: false,
                mensagem: 'Este CPF já está cadastrado por outro Cliente.',
            };
        }
        const novo = repository.adicionarNovo(this.dados);
        return {
            sucesso: true,
            mensagem: 'Cliente cadastrado com sucesso',
            dadoCadastrado: novo,
        };
    }
}
exports.CadastrarCliente = CadastrarCliente;

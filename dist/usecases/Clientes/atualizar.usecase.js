"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtualizarCliente = void 0;
const Clientes_1 = require("../../repository/Clientes");
class AtualizarCliente {
    constructor(dadosConst) {
        this.dados = dadosConst;
    }
    execute() {
        // PRECISA EXISTIR O REGISTRO NA LISTA
        const repository = new Clientes_1.ClientesRepository();
        // BUSCA POR ID
        const indice = repository.buscarClientePorID(this.dados.idCliente);
        if (indice < 0) {
            return {
                sucesso: false,
                mensagem: "O ID informado não existe na base de dados.",
                dadoAtualizado: undefined,
            };
        }
        // ATUALIZAÇÃO
        const dadoAtualizado = repository.atualizarCliente(indice, this.dados);
        return {
            sucesso: true,
            mensagem: "Registro atualizado com sucesso.",
            dadoAtualizado,
        };
    }
}
exports.AtualizarCliente = AtualizarCliente;

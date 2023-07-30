"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletarCliente = void 0;
const Clientes_1 = require("../../repository/Clientes");
class DeletarCliente {
    constructor(idCliente) {
        this.id = idCliente;
    }
    execute() {
        const repository = new Clientes_1.ClientesRepository();
        const indice = repository.buscarClientePorID(this.id);
        if (indice === -1) {
            return {
                sucesso: false,
                mensagem: "Registro não encontrado pelo ID informado.",
                clienteExcluido: undefined,
            };
        }
        const clienteDeletado = repository.deletarCliente(indice);
        return {
            sucesso: true,
            mensagem: "Cliente removido com sucesso.",
            clienteExcluido: clienteDeletado,
        };
    }
}
exports.DeletarCliente = DeletarCliente;

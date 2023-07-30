"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarClientes = void 0;
const Clientes_1 = require("../../repository/Clientes");
class ListarClientes {
    execute() {
        const repository = new Clientes_1.ClientesRepository();
        const listaClientesRetorno = repository.listarClientes();
        if (!listaClientesRetorno.length) {
            return {
                sucesso: false,
                mensagem: "Não possui nenhum cliente cadastrado.",
                clientes: [],
            };
        }
        return {
            sucesso: true,
            mensagem: "Clientes listados com sucesso.",
            clientes: listaClientesRetorno,
        };
    }
}
exports.ListarClientes = ListarClientes;

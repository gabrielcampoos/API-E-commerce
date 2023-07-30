"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesRepository = void 0;
const crypto_1 = require("crypto");
const classes_1 = require("../../classes");
const database_1 = require("../../database");
class ClientesRepository {
    existeCPFCadastrado(cpf) {
        return database_1.clientes.some((c) => c.toJSON().cpf === cpf);
    }
    adicionarNovo(dados) {
        const novoCliente = new classes_1.Cliente({
            id: (0, crypto_1.randomUUID)(),
            nome_completo: dados.nome,
            cpf: dados.cpf,
            email: dados.email,
            telefone: dados.telefone,
            senha: dados.senha,
        });
        database_1.clientes.push(novoCliente);
        return novoCliente;
    }
    listarClientes() {
        return database_1.clientes.map((valor) => {
            const cliente = {
                ...valor.toJSON(),
                senha: undefined,
            };
            delete cliente.senha;
            return cliente;
        });
    }
    buscarClientePorID(idCliente) {
        return database_1.clientes.findIndex((cliente) => cliente.toJSON().id === idCliente);
    }
    atualizarCliente(posicao, novosDados) {
        database_1.clientes[posicao].atualizarDados(novosDados);
        return database_1.clientes[posicao].retornaClienteSemSenha();
    }
    deletarCliente(posicao) {
        return database_1.clientes.splice(posicao, 1)[0];
    }
}
exports.ClientesRepository = ClientesRepository;

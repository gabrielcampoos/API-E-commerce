"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesController = void 0;
const Clientes_1 = require("../../usecases/Clientes");
const atualizar_usecase_1 = require("../../usecases/Clientes/atualizar.usecase");
const deletar_usecase_1 = require("../../usecases/Clientes/deletar.usecase");
const listar_usecase_1 = require("../../usecases/Clientes/listar.usecase");
class ClientesController {
    // CREATE
    cadastrar(request, response) {
        const { nome_completo, cpf, telefone, email, senha } = request.body;
        // precisa passar para a camada de regra de negocio
        const usecase = new Clientes_1.CadastrarCliente({
            nome: nome_completo,
            telefone: telefone,
            cpf: cpf,
            email: email,
            senha: senha,
        });
        const resposta = usecase.execute();
        if (!resposta.sucesso) {
            return response.status(400).json(resposta);
        }
        return response.status(201).json(resposta);
    }
    // LIST ALL
    listar(request, response) {
        const usecase = new listar_usecase_1.ListarClientes();
        const resposta = usecase.execute();
        if (!resposta.sucesso) {
            return response.status(404).send({ resposta });
        }
        return response.status(200).send({ resposta });
    }
    // LIST BY ID
    // UPDATE
    atualizar(request, response) {
        const { idCliente } = request.params;
        const { nome_completo, telefone, email } = request.body;
        const usecase = new atualizar_usecase_1.AtualizarCliente({
            idCliente,
            nome: nome_completo,
            email,
            telefone,
        });
        const retorno = usecase.execute();
        if (!retorno.sucesso) {
            return response.status(404).send({ retorno });
        }
        return response.status(200).send({ retorno });
    }
    // DELETE
    deletar(request, response) {
        const { idCliente } = request.params;
        const usecase = new deletar_usecase_1.DeletarCliente(idCliente);
        const retorno = usecase.execute();
        if (!retorno.sucesso) {
            return response.status(404).send({ retorno });
        }
        return response.status(200).send({ retorno });
    }
}
exports.ClientesController = ClientesController;

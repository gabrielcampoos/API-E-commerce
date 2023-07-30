"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const usuario_class_1 = __importDefault(require("./usuario.class"));
class Cliente extends usuario_class_1.default {
    constructor(dados) {
        super({
            id: dados.id,
            nome_completo: dados.nome_completo,
            telefone: dados.telefone,
            cpf: dados.cpf,
            email: dados.email,
            senha: dados.senha,
        });
        this.endereco = dados.endereco;
    }
    toJSON() {
        const objCliente = {
            id: this.id,
            nome_completo: this.nome_completo,
            telefone: this.telefone,
            email: this.email,
            senha: this.senha,
            cpf: this.cpf,
            endereco: this.endereco,
        };
        return objCliente;
    }
    atualizarDados(novosDados) {
        if (novosDados.email) {
            this.email = novosDados.email;
        }
        if (novosDados.nome) {
            this.nome_completo = novosDados.nome;
        }
        if (novosDados.telefone) {
            this.telefone = novosDados.telefone;
        }
    }
    retornaClienteSemSenha() {
        const objCliente = {
            id: this.id,
            nome_completo: this.nome_completo,
            telefone: this.telefone,
            email: this.email,
            senha: this.senha,
            cpf: this.cpf,
            endereco: this.endereco,
        };
        return objCliente;
    }
}
exports.Cliente = Cliente;

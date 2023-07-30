"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor(dados) {
        this.id = dados.id;
        this.nome_completo = dados.nome_completo;
        this.telefone = dados.telefone;
        this.cpf = dados.cpf;
        this.email = dados.email;
        this.senha = dados.senha;
    }
    toJSON() {
        const objUsuario = {
            id: this.id,
            nome: this.nome_completo,
            telefone: this.telefone,
            cpf: this.cpf,
            email: this.email,
            senha: this.senha,
        };
        return objUsuario;
    }
}
exports.default = Usuario;

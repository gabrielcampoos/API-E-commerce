import { ClienteSemSenha } from "../usecases/Clientes";
import { AtualizarClienteDTO } from "../usecases/Clientes/atualizar.usecase";
import Usuario, { UsuarioDTO } from "./usuario.class";

type ClienteDTO = UsuarioDTO & { endereco?: Array<any> };

export class Cliente extends Usuario {
  endereco?: Array<any>;

  constructor(dados: ClienteDTO) {
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

  public toJSON() {
    const objCliente: ClienteSemSenha & { endereco?: Array<any> } = {
      id: this.id,
      nome_completo: this.nome_completo,
      telefone: this.telefone,
      email: this.email,
      cpf: this.cpf,
      endereco: this.endereco,
    };

    return objCliente;
  }

  public atualizarDados(novosDados: Omit<AtualizarClienteDTO, "idCliente">) {
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

  public retornaClienteSemSenha() {
    const objCliente: ClienteSemSenha & { endereco?: Array<any> } = {
      id: this.id,
      nome_completo: this.nome_completo,
      telefone: this.telefone,
      email: this.email,
      cpf: this.cpf,
      endereco: this.endereco,
    };
    return objCliente;
  }
}

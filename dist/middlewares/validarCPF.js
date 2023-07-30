"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCPF = void 0;
function validarCPF(req, res, nxt) {
    const dados = req.body;
    const cpf = dados.cpf.replaceAll('.', '').replace('-', '');
    if (cpf.length !== 11) {
        return res.status(400).json({
            sucesso: false,
            motivo: 'CPF inválido.',
        });
    }
    // dá pra modificar os dados do json enviado
    req.body.cpf = cpf;
    // e também dá pra inserir novos dados no json
    req.body.NovoDado = 'Teste novo';
    // tudo antes de chamar a proxima funcao para que a mesma possa acessar esses dados adicionais e/ou o json modelado
    nxt();
}
exports.validarCPF = validarCPF;

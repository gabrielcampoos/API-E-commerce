"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const middlewares_1 = require("./middlewares");
const app = (0, express_1.default)();
// torna desnecessario a utilizacao do JSON.parse() e JSON.stringify()
app.use(express_1.default.json());
// converte os codigos unicode enviados na rota para o respectivo caracter
// Ex: %20 => ' '
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.listen(process.env.PORTA, () => {
    console.log(`Servidor rodando na porta ${process.env.PORTA}`);
});
// AS DEFINIÇÕES DAS ROTAS
app.get("/", (request, response) => {
    return response.json("API LOJA VIRTUAL NO AR 🚀");
});
// ===============================================
// CLIENTES
const controllerClientes = new controllers_1.ClientesController();
// POST - CADASTRAR CLIENTE
app.post("/clientes", middlewares_1.validarDadosUsuario, middlewares_1.validarCPF, controllerClientes.cadastrar);
// GET - LISTAR CLIENTES
app.get("/clientes", controllerClientes.listar);
// PUT - ATUALIZAR CLIENTES
app.put("/clientes/:idCliente", middlewares_1.validarIdCliente, middlewares_1.validarAtualizacaoCamposCliente, controllerClientes.atualizar);
// DELETE - EXCLUIR CLIENTES
app.delete("/clientes/:idCliente", middlewares_1.validarIdCliente, controllerClientes.deletar);
// ===============================================
// ENDEREÇOS
// ===============================================
// PAGAMENTOS
// ===============================================
// PRODUTOS
const controllerProdutos = new controllers_1.ProdutosController();
// POST - CADASTRAR PRODUTO
app.post("/produtos", middlewares_1.validarCamposDeProduto, middlewares_1.validarTipoPreco, controllerProdutos.criar);
// GET - LISTAR PRODUTOS
app.get("/produtos", middlewares_1.validarParamentrosFiltragemProdutos, controllerProdutos.listar);
// ===============================================
// CARRINHO

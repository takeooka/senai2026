const express = require('express')
// Criar um roteador separado para os endpoints de produto
const router = express.Router()
//Importar o controller que executara cada operação
const ProdutoController = require('../controllers/produtoController')
//Associa cada metodo HTTP a sua funcao no controller
//GET, GET, POST, PUT, DELETE
router.get('/', ProdutoController.listar);
router.get('/:id', ProdutoController.buscarPorId);
router.post('/', ProdutoController.criar);
router.put('/:id', ProdutoController.atualizar);
router.delete('/:id', ProdutoController.excluir);
//Exportar as rotas para serem utilizadas pelo servidor principal.
module.exports = router// Importa o Express para criar as rotas da API.

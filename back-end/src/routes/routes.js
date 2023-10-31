const {Router} = require("express");

// Importando as rotas definidas em outros arquivos.
const userRouter = require("./user.routes");
const authRouter = require("./auth.routes");
const swaggerRouter = require("./swagger.route");

// Criando um objeto de roteamento chamado 'router' usando o módulo 'Router' do Express.
const router = Router();

// Definindo rotas para os caminhos "/users" e "/auth" e associando-as aos roteadores importados.
router.use("/users", userRouter);// Roteia todas as solicitações para "/users" para as rotas definidas em 'userRouter'.
router.use("/auth", authRouter);// Roteia todas as solicitações para "/auth" para as rotas definidas em 'authRouter'.

router.use("/doc",swaggerRouter);

module.exports = router;
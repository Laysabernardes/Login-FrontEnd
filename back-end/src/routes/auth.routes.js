const {Router} = require("express"); // Importa o módulo "Router" do Express, que permite definir rotas.
const authRouter = Router();// Cria uma instância do Router para definir as rotas.

//Classe de autentificação
const AuthController = require("../controllers/auth.controller.js");
const auth = new AuthController();

// Funções de Autentificação
authRouter.post("/", auth.login);

module.exports = authRouter;
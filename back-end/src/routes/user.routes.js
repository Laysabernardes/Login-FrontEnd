const {Router} = require("express");// módulo "Router" do Express, que permite definir rotas.
const UserController = require("../controllers/user.controller.js");// controller para manipular as operações relacionadas a usuários. O controlador é responsável por definir a lógica de manipulação de cada rota.
const {validId, validUser} = require("../middlewares/global-middlewares.js");// middleware serão executadas antes das rotas

const userRouter = Router(); // Cria uma instância do Router para definir as rotas.

const controller = new UserController();

// Funções de Usuário
userRouter.post("/", controller.create); // Define a rota POST para criar um novo usuário. 
userRouter.get("/", controller.findAll);// Define a rota GET para listar todos os usuários.
userRouter.get("/:id", validId, validUser, controller.findById);// Define a rota GET com um parâmetro dinâmico ":id" para buscar um usuário por ID. Os middlewares "validId" e "validUser" são executados antes da função "findById" do controlador.
userRouter.patch("/:id", validId , validUser, controller.update);// Define a rota PATCH com um parâmetro dinâmico ":id" para atualizar um usuário por ID. 

module.exports = userRouter;
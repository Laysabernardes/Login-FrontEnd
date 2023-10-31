const mongoose = require("mongoose");// Importa a biblioteca "mongoose" para interagir com o MongoDB.
const userService = require("../services/user.service.js");//essa variavel ta no use.crontrolles.js
// Importa o serviço "userService" que contém funções relacionadas a usuários, definido em "user.service.js"

//É exportado uma função que verifica a validade de um ID na solicitação HTTP.
//(req, res, next) é uma convenção para receber objetos req e res que representam a solicitação e a resposta HTTP, bem como a função next, que é usada para controlar o fluxo da execução entre middlewares 
const validId = (req, res, next) => {
    try {
        const id = req.params.id; // Extrai o valor do parâmetro "id" da solicitação HTTP e o armazena na variável "id".

        // Verifica se o ID fornecido é um ID válido, seguindo o padrão do Mongoose.
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "ID Inválido" });
            // Se o ID não for válido, retorna uma resposta de erro com status 400 e uma mensagem.
        }
        next();// Se o ID for válido, chama a função "next()" para passar o controle para a próxima rota.
    } catch (err) {
        res.status(500).send({ message: err.mensage })
        // Em caso de erro durante a execução, retorna uma resposta de erro com status 500 e a mensagem de erro.
    }
};

//async em uma função indica que ela pode conter operações assíncronas e permite o uso de await para aguardar a conclusão dessas operações sem bloquear a execução do código.
const validUser = async (req, res, next) => {
    try {
        const id = req.params.id;

        // Chama a função "findByIdService" do serviço "userService" para buscar um usuário com base no ID.
        // await para aguarda a conclusão da operação
        const user = await userService.findByIdService(id);

        if (!user) {
            return res.status(400).send({ message: "User not found" });
        }

        // Define as propriedades "id" e "user" no objeto de solicitação (req) para uso posterior.
        req.id = id;
        req.user = user;
        next();
    } catch (err) {
        res.status(500).send({ message: err.mensage })
    }
};

module.exports = {
    validId,
    validUser
}

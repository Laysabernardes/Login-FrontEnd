const userService = require("../services/user.service.js");// Importa o serviço "userService" para lidar com operações relacionadas a usuários.

class UserController {
    
    // Função para criar um novo usuário.
    create = async (req, res) => {
        try {// Extrai os campos do usuário (name, username, email, password, avatar) da solicitação.
            const { name, email, password} = req.body;

            // Verifica se todos os campos obrigatórios foram fornecidos na solicitação.
            if (!name || !email || !password ) {
                res.status(400).send({ message: "Preencha todos os campos para o registro" });
            }

            // Cria um novo usuário usando o serviço "userService".
            //await é usado junto com async
            const user = await userService.createService(req.body);

            if (!user) {
                return res.status(400).send({ message: "Erro ao criar usuário" });
            }

            res.status(201).send({
                message: "Usuário criado com sucesso!",
                user: {
                    id: user._id,
                    name,
                    email
                    
                }
            });
        } catch (err) {
            res.status(500).send({ message: err.mensage });
        }
    }

    // Função para buscar todos os usuários.
    findAll = async (req, res) => {
        try {
            // Busca todos os usuários usando o serviço "userService".
            const users = await userService.findAllService();

             // verificar se o array está vazio
            if (users.length === 0) {
                return res.status(400).send({ message: "Não há usuários registrados." });
            }
            // Envia a lista de usuários como resposta.
            res.send(users);
        } catch (err) {
            res.status(500).send({ message: err.mensage })
        }
    };

    // Função para buscar um usuário por ID.
    findById = async (req, res) => {
        try {
            const user = req.user; // Recupera o usuário da solicitação.
            res.send(user);// Envia o usuário como resposta.
        } catch (err) {
            res.status(500).send({ message: err.mensage })
        }
    }

    // Envia o usuário como resposta.
    update = async (req, res) => {
        try {
            // Extrai os campos a serem atualizados (name, username, email, password, avatar) da solicitação.
            const { name, email, password} = req.body;

            // Verifica se pelo menos um campo deve ser atualizado.
            if (!name && !email && !password) {
                res.status(400).send({ message: "Submita pelo menos um  campo para fazer o Update" });
            };

            const { id, user } = req; // Obtém o ID do usuário e o usuário da solicitação.

            // Usa o serviço "userService" para atualizar as informações do usuário.
            await userService.updateService(
                id,
                name,
                email,
                password           
            );
            res.send({ message: "Usuario foi atualizado com sucesso!" });
        } catch (err) {
            res.status(500).send({ message: err.mensage })
        }
    };
}

module.exports = UserController;
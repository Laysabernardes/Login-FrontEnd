// Autentificar o Usuário
const bcrypt = require("bcryptjs");// Importa a biblioteca bcrypt para lidar com a criptografia de senhas.
const loginService = require("../services/auth.service.js");// Importa o serviço de autenticação "loginService".

class AuthController{
    // Função para processar o login do usuário.
    login = async (req, res) => {
        const {email, password} = req.body; // Extrai o email e senha da solicitação.
        try{
            const user = await loginService(email); // Pesquisa um usuário com base no email fornecido.
            if(!user){
                return res.status(404).send({message: "Usuário ou senha não incorreto"});
            }
            
            // Compara a senha fornecida no login com a senha armazenada no banco de dados (após criptografia).
            const passwordIsValid = bcrypt.compareSync(password,user.password);
            if(!passwordIsValid){
                return res.status(400).send({message: "Usuário ou senha não incorreto"});
            }
            res.send("Login executado!!");   
                     
        } catch(err){
            res.status(500).send(err.message);
        };

    }
}

module.exports = AuthController
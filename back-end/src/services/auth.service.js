const User = require("../models/models.js");

// A função "loginService" verifica se há um usuário no banco de dados com um determinado endereço de e-mail.
const loginService = (email) => User.findOne({email: email}).select("+password");
// Usa o método "findOne" do Mongoose para buscar um documento na coleção "User" onde o campo "email" seja igual ao e-mail passado como parâmetro.
// O método ".select("+password") é usado para incluir o campo "password" na resposta.

module.exports = loginService;
const User = require("../models/models.js");
//.create, .find, .findById , .findOneAndUpdate são metodos do mongoose. 

const createService = (body) => User.create(body);// Função para criar um novo usuário no bd
const findAllService = () => User.find();// Função para encontrar todos os usuários no bd
const findByIdService = (id) => User.findById(id);// Função para encontrar um usuário pelo seu ID no bd

// Função para atualizar as informações de um usuário no banco de dados com base no ID.
const updateService = (id,name,email,password) => User.findOneAndUpdate({_id: id},{name,email,password,avatar});
// { _id: id } é o critério de consulta para encontrar o usuário pelo ID. E o restante são valores a serem atualizados.

module.exports = {
    createService,
    findAllService,
    findByIdService,
    updateService
};
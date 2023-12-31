// Importa a biblioteca "mongoose" para se conectar ao MongoDB
const mongoose = require("mongoose");

// Declara a função "connectDatabase" para conectar ao banco de dados.
const connectDatabase = () => {
    console.log("Aguarde enquanto a conexão com o banco de dados é estabelecida");

    // Conecta ao banco de dados usando a URL 
    // As opções { useNewUrlParser: true, useUnifiedTopology: true } são usadas para configurar a conexão.
    //.then() é usado para executar ações quando uma operação assíncrona é bem-sucedida
    //.catch() lida com erros que podem ocorrer durante essa operação.
    mongoose.connect( "mongodb+srv://login:login123@cluster0.m6gz8me.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Conexão com o MongoDB Atlas estabelecida")).catch((error) => console.log(error));
};

// Exporta a função "connectDatabase" para que ela possa ser usada em outras partes do aplicativo.
module.exports = connectDatabase;
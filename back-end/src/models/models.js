//Models é a forma de bolo de um usuário
const mongoose = require('mongoose'); // Importa o módulo "mongoose", que é usado para definir esquemas (schemas) e interagir com o MongoDB.
const bcrypt = require("bcryptjs");  // Importa o módulo "bcryptjs" para criptografar senhas.

//Schema é uma metodo do mongoose
//Define o schema ou seja a estrutura dos documentos de usuário
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true , //para cada email ser unico
        lowercase:true,// Armazena o e-mail em letras minúsculas.
    },
    password: {
        type: String,
        required: true,
        select:false, // Evita que a senha seja selecionada por padrão em consultas.
    }
})

// Middleware "pre" do Mongoose que é executado antes de salvar um documento no banco de dados.
UserSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    // Este trecho de código criptografa a senha do usuário usando o bcrypt antes de salvar no banco de dados.
    //O número 10 representa a quantidade de recursos computacionais que o sistema usa para tornar a senha segura, tornando a criptografia mais forte, mas potencialmente mais lenta.
    next();
});

const User = mongoose.model("User", UserSchema);
// Define o modelo "User" baseado no esquema "UserSchema".
//cria uma "caixa" chamada User que define como os dados dos usuários são armazenados e recuperados no banco de dados.

module.exports = User;
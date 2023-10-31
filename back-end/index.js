// Importação de módulos
const express = require("express");// Importa o módulo Express para criar um servidor
const connectDatabase = require("./src/bd/bd.js");// Importa uma função para conectar ao banco de dados
const routes = require("./src/routes/routes.js");// Importa as rotas da aplicação
var cors = require('cors');//Importa o módulo cors, que permite configurar a política de mesma origem.
 
const app = express()// Cria uma instância do Express chamada 'app'
app.use(cors());
const port = process.env.PORT || 3001;
// 'process.env.PORT' é a porta definida na variável de ambiente (para deploy em nuvem)
// Se a variável de ambiente não estiver definida, utiliza a porta 3000

connectDatabase();// Chama a função para conectar ao banco de dados

app.use(express.json()); //Middleware do Express, permiti que a aplicação receba dados no formato JSON em requisições
app.use(routes);// Middleware que adiciona as rotas definidas no módulo 'routes' à aplicação
// Isso permite que o Express encaminhe solicitações HTTP para as rotas corretas


app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
// Iniciar o servidor na porta especificada
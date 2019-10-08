const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const routes = require ('./routes');


const app = express();

mongoose.connect ('mongodb+srv://brunopapait:57a8tycd@omistack9-lsual.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useUnifiedTopology: true,
});

//GET, POST, PUT, DELETE

//req.query = acessar query params (Para filtros)
//req.params = acessar route params (para editar ou deletar (PUT, DELETE))
//req.body = Acessar corpo da requisição (para criação, ediçãp)

app.use (cors());
app.use (express.json());
app.use(routes);

app.listen (3333);
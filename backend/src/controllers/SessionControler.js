const User = require ("../models/User");

//index, show, store, update, destroy

//index = criando um metodo que retorna uma listagem de sessoes
//show = listar uma unica sessao
//store = criar uma sessão
//update = atualizar uma sessão
//destroy = remover uma sessão

//metodos disponiveis do controller

module.exports = {
   async store(req,res) {
        const {email} = req.body;

        let user = await User.findOne ({ email });

        if (!user){
            user = await User.create({ email });
        }

        

        return res.json (user);
    }
};
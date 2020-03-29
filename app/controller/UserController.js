const User = require('../Model/UserModel');

exports.create = (req,res) =>{
 
     if(!req.body.nome){
         return  res.status(400).send({
             message:"Por Favor Preencha o nome"
         })
     }

     const Usuario = new User({
         nome:req.body.nome,
         email:req.body.email
     })

     Usuario.save().then((data)=>{
        res.send(data);
     }).catch((erro)=>{
         res.status(500).send({
             message:"Não foi possivel salvar o usuário"
         })
     })

};

exports.findAll = (req,res)=>{
  User.find().then((data)=>{
      res.send(data)
  }).catch((e)=>{
      res.status.send({
          message:"Erro ao listar usuários"
      })
  })
};

exports.findOne =(req,res)=>{
    User.findById(req.params.id).then((usuario)=>{
        if(!usuario){
            res.send({
                "message":"Não foi encontrado nenhuma usuario com esse ID"
            })
        }
        res.send(usuario);
    }).catch((erro)=>{
        res.status(500).send({
            "Message":"Erro ao procurar o usuário"
        })
    })
}

exports.update =(req,res) =>{

    User.findByIdAndUpdate(req.params.id,{
        nome:req.body.nome,
        email:req.body.email
    },{new:true}).then((user)=>{
        if(!user){
            res.status(404).send({
                message:"Usuario não encontrado"
            })
        }
        res.send(user);
    }).catch((erro)=>{
        res.status(500).send({
            message:"Erro ao actualizar o usuario"
        })
    })
};

exports.delete = (req,res) =>{
    User.findByIdAndDelete(req.params.id).then(()=>{
        res.send({
            message:"Deletado com Sucesso"
        })
    }).catch((e)=>{
        res.send(e);
    })
}
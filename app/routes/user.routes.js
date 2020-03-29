module.exports = app => {
  const user = require("../controller/UserController");

  //listar todos os usuarios
  app.get("/user", user.findAll);

  //criar novo usuario
  app.post("/user", user.create);

  //buscar usuario pelo id
  app.get("/user/:id", user.findOne);

  //deletar usuario pelo id
  app.delete('/user/:id',user.delete);
 
   //actualizar usuario

   app.put("/user/:id",user.update);

};

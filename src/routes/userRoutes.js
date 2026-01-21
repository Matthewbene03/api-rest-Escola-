//import {Router} from "express"; Outro exemplo
import express from "express";
import userController from "../controller/UserController";
import loginRequired from "../middlewares/loginRequired";

const router = express.Router();

//Não deveria existir
router.get("/", userController.index);
router.get("/:id", userController.show);

//Rotas para a User
router.post("/", userController.createUser);

//Atravez do loginRequired, sabe qual usuario está logado no sistema e somente esse usuario vai poder atualizar e deletar
router.put("/", loginRequired, userController.updateUser); //Um usuário pode editar os seus dados e nao de outros. Não usar /:id para não editar todos os usuários
router.delete("/", loginRequired, userController.deleteUser); //Um usuário pode deletar os seus dados e nao de outros. Não usar /:id para não deletar todos os usuários

export default router;

/* Metodos do controller
  index -> Lista todos os usuarios -> GET
  store/create -> cria um novo usuario -> POST
  delete -> apaga um usuario -> DELETE
  show -> mostra um usuario -> GET
  update -> atualiza um usuario -> PATCH ou PUT
*/

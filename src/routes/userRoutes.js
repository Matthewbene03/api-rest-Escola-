//import {Router} from "express"; Outro exemplo
import express from "express";
import userController from "../controller/UserController";

const router = express.Router();

//Rotas para a User
router.post("/", userController.createUser);

export default router;

/* Metodos do controller
  index -> Lista todos os usuarios -> GET
  store/create -> cria um novo usuario -> POST
  delete -> apaga um usuario -> DELETE
  show -> mostra um usuario -> GET
  update -> atualiza um usuario -> PATCH ou PUT
*/

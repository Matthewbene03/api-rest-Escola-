//Rota apenas para receber fotos/uploades

//import {Router} from "express"; Outro exemplo
import express from "express";
import fotoController from "../controller/FotosController";
import loginRequired from "../middlewares/loginRequired";

const router = express.Router();

router.post("/", loginRequired, fotoController.createFotos); //Usa o upload como middelewres e "single" serve para receber um arquivo. "arquivo" é o nome do campo que o arquivo está sendo enviado

export default router;

/* Metodos do controller
  index -> Lista todos os usuarios -> GET
  store/create -> cria um novo usuario -> POST
  delete -> apaga um usuario -> DELETE
  show -> mostra um usuario -> GET
  update -> atualiza um usuario -> PATCH ou PUT
*/

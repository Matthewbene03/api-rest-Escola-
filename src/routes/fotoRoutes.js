//import {Router} from "express"; Outro exemplo
import express from "express";
import multer from "multer";

import fotoController from "../controller/FotosController";
import multerConfig from "../config/mouterConfig";

const upload = multer(multerConfig);
const router = express.Router();

//Rotas para a home
router.post("/", upload.single("arquivo"), fotoController.createFotos);

export default router;

/* Metodos do controller
  index -> Lista todos os usuarios -> GET
  store/create -> cria um novo usuario -> POST
  delete -> apaga um usuario -> DELETE
  show -> mostra um usuario -> GET
  update -> atualiza um usuario -> PATCH ou PUT
*/

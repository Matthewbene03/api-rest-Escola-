//import {Router} from "express"; Outro exemplo
import express from "express";
import alunosController from "../controller/AlunoController";
 import loginRequired from "../middlewares/loginRequired";

const router = express.Router();

//Não deveria existir
router.get("/", alunosController.index);
router.get("/:id", alunosController.show);

//Rotas para a Alunos
router.post("/", loginRequired, alunosController.createAluno);

//Atravez do loginRequired, sabe qual usuario está logado no sistema e somente esse usuario vai poder atualizar e deletar
router.put("/:id", loginRequired, alunosController.updateAluno); //Um Aluno pode editar os seus dados e nao de outros. Não usar /:id para não editar todos os Alunos
router.delete("/:id", loginRequired, alunosController.deleteAluno); //Um Aluno pode deletar os seus dados e nao de outros. Não usar /:id para não deletar todos os Alunos

export default router;

/* Metodos do controller
  index -> Lista todos os usuarios -> GET
  store/create -> cria um novo usuario -> POST
  delete -> apaga um usuario -> DELETE
  show -> mostra um usuario -> GET
  update -> atualiza um usuario -> PATCH ou PUT
*/

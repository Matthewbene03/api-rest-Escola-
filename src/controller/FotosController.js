import multer from "multer";
import multerConfig from "../config/mouterConfig";
const upload = multer(multerConfig).single("arquivo"); //faz o multer usar as configurações criadas para receber o arquivo

import Foto from "../models/Foto";
import Aluno from "../models/Aluno";

class FotosController {
  constructor() { }

  createFotos(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code]
        });
      }

      const { aluno_id } = req.body;
      const aluno = await Aluno.findByPk(aluno_id);

      if (!aluno) {
        return res.status(400).json({
          errors: ["Esse aluno não existe!"]
        });
      }

      const { originalname, filename } = req.file;
      const foto = await Foto.create({ originalname, filename, aluno_id });
      return res.json(foto);
    });
  }
}

export default new FotosController();

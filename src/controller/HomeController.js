import Aluno from "../models/Aluno";

class HomeController {
  constructor() { }

  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Matheus",
      sobrenome: "Benevenuto",
      email: "matheus@gmail.com",
      idade: 22,
      peso: 1.70,
      altura: 1.70,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();

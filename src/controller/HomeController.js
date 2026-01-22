import Aluno from "../models/Aluno";

class HomeController {
  constructor() { }

  async index(req, res) {
    res.json("index");
  }
}

export default new HomeController();

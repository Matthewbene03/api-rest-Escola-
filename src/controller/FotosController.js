class FotosController {
  constructor() { }

  async index(req, res) {
    res.json("index");
  }

  async createFotos(req, res) {
    res.json(req.file);
  }
}

export default new FotosController();

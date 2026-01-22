import Aluno from "../models/Aluno";

class AlunoController {
  constructor() { }

  //Método para criar usuário no banco de dados
  async createAluno(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      const {id, nome, email} = novoAluno;
      res.json({id, nome, email});
    } catch (e) {
      console.log(e);
      res.status(400).json(
        {
          errors: e.errors.map((error) => error.message),
        });
    }
  }

  //Método para buscar todos os usuário no banco de dados
  async index(req, res) {
    try {
      const novoAluno = await Aluno.findAll(); //Busca todos e retorna apenas esses atributos
      return res.json(novoAluno);
    } catch (e) {
      console.log(e);
      return res.status(400).json(
        {
          errors: e.errors.map((error) => error.message),
        });
    }
  }

  //Método para buscar um usuário de acordo com o ID no banco de dados
  async show(req, res) {
    try {
      const idParams = req.params.id;

      if (!idParams) { //Se não tem id nos parametros da URL
        return res.status(400).json({
          errors: ["Informe um id!"]
        });
      };

      const novoAluno = await Aluno.findByPk(idParams);

      if (!novoAluno) { //Se não tiver um usuário no BD
        return res.status(400).json({
          errors: ["Não existe um usuário com esse id!"]
        });
      };

      const { id, nome, email } = novoAluno

      res.json({ id, nome, email });
    } catch (e) {
      console.log(e);
      res.status(400).json(
        {
          errors: e.errors.map((error) => error.message),
        });
    }
  }

  //Método para atualizar um usuário no banco de dados
  async updateAluno(req, res) {
    try {
      const Aluno = await Aluno.findByPk(req.AlunoId);

      if (!Aluno) { //Se não tiver um usuário no BD
        return res.status(400).json({
          errors: ["Não existe um usuário com esse id!"]
        });
      };

      const novoAluno = await Aluno.update(req.body);
      const {id, nome, email} = novoAluno;
      res.json({id, nome, email});
    } catch (e) {
      console.log(e);
      res.status(400).json(
        {
          errors: e.errors.map((error) => error.message),
        });
    }
  };

  //Método para deletar um usuário os usuário no banco de dados
  async deleteAluno(req, res) {
    try {
      const novoAluno = await Aluno.findByPk(req.AlunoId);

      if (!novoAluno) { //Se não tiver um usuário no BD
        return res.status(400).json({
          errors: ["Não existe um usuário com esse id!"]
        });
      };

      await novoAluno.destroy();
      return res.json(null);
    } catch (e) {
      console.log(e);
      res.status(400).json(
        {
          errors: e.errors.map((error) => error.message),
        });
    }
  }
}

export default new AlunoController();

/* Metodos do controller
  index -> Lista todos os usuarios -> GET
  store/create -> cria um novo usuario -> POST
  delete -> apaga um usuario -> DELETE
  show -> mostra um usuario -> GET
  update -> atualiza um usuario -> PATCH ou PUT
*/

import User from "../models/User";

class UserController {
  constructor() { }

  //Método para criar usuário no banco de dados
  async createUser(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
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
      const novoUser = await User.findAll();
      return res.json(novoUser);
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
      const id = req.params.id;

      if (!id) { //Se não tem id nos parametros da URL
        return res.status(400).json({
          errors: ["Informe um id!"]
        });
      };

      const novoUser = await User.findByPk(id);

      if (!novoUser) { //Se não tiver um usuário no BD
        return res.status(400).json({
          errors: ["Não existe um usuário com esse id!"]
        });
      };

      res.json(novoUser);
    } catch (e) {
      console.log(e);
      res.status(400).json(
        {
          errors: e.errors.map((error) => error.message),
        });
    }
  }

  //Método para atualizar um usuário no banco de dados
  async updateUser(req, res) {
    try {
      const id = req.params.id;

      if (!id) { //Se não tem id nos parametros da URL
        return res.status(400).json({
          errors: ["Informe um id!"]
        });
      };

      const user = await User.findByPk(id);

      if (!user) { //Se não tiver um usuário no BD
        return res.status(400).json({
          errors: ["Não existe um usuário com esse id!"]
        });
      };

      const novoUser = await user.update(req.body);
      res.json(novoUser);
    } catch (e) {
      console.log(e);
      res.status(400).json(
        {
          errors: e.errors.map((error) => error.message),
        });
    }
  }

  //Método para deletar um usuário os usuário no banco de dados
  async deleteUser(req, res) {
    try {
      const id = req.params.id;

      if (!id) { //Se não tem id nos parametros da URL
        return res.status(400).json({
          errors: ["Informe um id!"]
        });
      };

      const novoUser = await User.findByPk(id);

      if (!novoUser) { //Se não tiver um usuário no BD
        return res.status(400).json({
          errors: ["Não existe um usuário com esse id!"]
        });
      };

      await novoUser.destroy();
      res.json(novoUser);
    } catch (e) {
      console.log(e);
      res.status(400).json(
        {
          errors: e.errors.map((error) => error.message),
        });
    }
  }
}

export default new UserController();

/* Metodos do controller
  index -> Lista todos os usuarios -> GET
  store/create -> cria um novo usuario -> POST
  delete -> apaga um usuario -> DELETE
  show -> mostra um usuario -> GET
  update -> atualiza um usuario -> PATCH ou PUT
*/

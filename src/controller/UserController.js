import User from "../models/User";

class UserController {
  constructor() { }

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
}

export default new UserController();

import User from "../models/User";
import jwt from "jsonwebtoken";

class TokenController {
  constructor() { }

  async createToken(req, res) {
    const email = req.body.email || "";
    const password = req.body.password || "";

    if (!email || !password) {
      return res.status(400).json({
        erros: ["Credenciais invalidas!"],
      });
    }

    const user = await User.findOne({ where: { email } }); //Verifica se tem um usuario com esse email no BD;

    if (!user) {
      return res.status(400).json({
        erros: ["Usuário não existe!"],
      })
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(400).json({
        erros: ["Senha invalida!"],
      })
    }
    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token })
  }
}

export default new TokenController();

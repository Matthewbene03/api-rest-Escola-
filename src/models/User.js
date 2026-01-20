import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

class User extends Model {
  static init(sequelize) { //Recebe a conexão com o banco
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 250],
            msg: "Campo nome deve ter entre 3 e 250 caracteres!",
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: "",
        unique: {
          msg: "Email já utilizado! Tente outro.",
        },
        validate: {
          isEmail: {
            msg: "Email invalido!",
          }
        }
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: "",
        validate: {
          len: {
            args: [6, 50],
            msg: "A senha deve ter entre 6 e 50 caracteres!",
          }
        }
      },
    },
      {
        sequelize, //Recebe a conexão com o banco
      });

      this.addHook("beforeSave", async user =>{
        if(user.password) {
          user.password_hash = await bcrypt.hash(user.password, 8)
        }
      });
    return this;
  }
};

export default User;

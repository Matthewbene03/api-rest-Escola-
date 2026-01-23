import Sequelize, { Model } from "sequelize";

class Aluno extends Model {
  static init(sequelize) { //Recebe a conexão com o banco
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 250], //Tam. para o nome
            msg: "O nome precisa ter entre 3 e 250 caracteres!"
          }
        }
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 250], //Tam. para o nome
            msg: "O nome precisa ter entre 3 e 250 caracteres!"
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 250], //Tam. para o nome
            msg: "O nome precisa ter entre 3 e 250 caracteres!"
          }
        }
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          isInt: {
            msg: "A idade precisa ser um numero inteiro!",
          }
        }
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: {
            msg: "Peso precisa ser um numero inteiro ou decimal!",
          }
        }
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: {
            msg: "Altura precisa ser um numero inteiro ou decimal!",
          }
        }
      }
    }, {
      sequelize, //Recebe a conexão com o banco
    })
    return this;
  }

  //Associação do model Foto com Aluno
  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: "aluno_id" });
  }
};

export default Aluno;

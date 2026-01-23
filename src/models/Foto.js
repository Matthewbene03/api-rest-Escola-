import Sequelize, { Model } from "sequelize";
import appConfig from "../config/appConfig"

class Foto extends Model {
  static init(sequelize) { //Recebe a conexão com o banco
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          notEmpty: {
            msg: "Campo não pode ficar vazio!"
          }
        }
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          notEmpty: {
            msg: "Campo não pode ficar vazio!"
          }
        }
      },
      url:{
        type: Sequelize.VIRTUAL,
        get(){
          return `${appConfig.url}/image/${this.getDataValue("filename")}`
        }
      }
    }, {
      sequelize, //Recebe a conexão com o banco
    })
    return this;
  }

  //Associação do model Foto com Aluno
  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: "aluno_id" });
  }
};

export default Foto;

import Sequelize, { Model } from "sequelize";

class Aluno extends Model {
  static init(sequelize) { //Recebe a conexão com o banco
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      idade: Sequelize.INTEGER,
      peso: Sequelize.FLOAT,
      altura: Sequelize.FLOAT,
    }, {
      sequelize, //Recebe a conexão com o banco
    })
    return this;
  }
};

export default Aluno;

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fotos',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        originalname: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        filename: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        aluno_id:{
          type: Sequelize.INTEGER,
          allowNull: true,
          references: { //Referencia a tabela de aluno pela chave id
            model: "alunos",
            key: "id"
          },
          onDelete: "SET NULL", //Deleta as fotos ou não se o aluno for deletado.
          onUpdate: "CASCADE", //Atualiza o id do aluno caso mude
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      }
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('fotos');
  }
};

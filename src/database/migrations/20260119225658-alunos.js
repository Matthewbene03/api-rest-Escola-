'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('alunos',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        sobrenome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        idade: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        peso: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        altura: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updateAt: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      }
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('alunos');
  }
};

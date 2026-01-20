import { Sequelize } from "sequelize";
import dataBaseConfig from "../config/database";
import Aluno from "../models/Aluno";

const models = [Aluno];

const connection = new Sequelize(dataBaseConfig);

models.forEach(model => model.init(connection));

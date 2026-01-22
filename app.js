import dotenv from "dotenv";
dotenv.config(); //Para usar configurações do arquivo .env

import "./src/database"
import express from "express";
import homeRouter from "./src/routes/homeRoutes";
import userRouter from "./src/routes/userRoutes";
import tokenRouter from "./src/routes/tokenRoutes";
import alunoRouter from "./src/routes/alunoRoutes";
import fotoRouter from "./src/routes/fotoRoutes";

class App{
  constructor(){
    this.app = express(); //Inicializa o express
    this.middlewres(); //Inicializa todos os middlewres usados no projeto
    this.routes(); //Inicializa todas as rotas usadas no projeto
  }

  middlewres(){
    this.app.use(express.urlencoded({ extended: true })); //serve para ler dados enviados pelo formulário (POST)
    this.app.use(express.json()); // Ler e interpretar requisições com corpo em JSON.
  }

  routes(){
    this.app.use("/", homeRouter) // Toda requisição que começar em "/" será tratada pelas rotas definidas em homeRouter
    this.app.use("/users", userRouter) // Toda requisição que começar em "/" será tratada pelas rotas definidas em userRouter
    this.app.use("/tokens", tokenRouter) // Toda requisição que começar em "/" será tratada pelas rotas definidas em userRouter
    this.app.use("/alunos", alunoRouter) // Toda requisição que começar em "/" será tratada pelas rotas definidas em userRouter
    this.app.use("/fotos", fotoRouter) // Toda requisição que começar em "/" será tratada pelas rotas definidas em userRouter
  }
};

const app = new App();
export default app.app;

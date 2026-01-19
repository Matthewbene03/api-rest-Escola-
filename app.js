import express from "express";
import homeRouter from "./src/routes/homeRoutes";

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
  }
};

const app = new App();
export default app.app;

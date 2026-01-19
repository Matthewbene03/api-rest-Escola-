//import {Router} from "express"; Outro exemplo
import express from "express";
import homeController from "../controller/HomeController";

const router = express.Router();

//Rotas para a home
router.get("/", homeController.index);

export default router;

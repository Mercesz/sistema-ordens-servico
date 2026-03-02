import express from "express";
import {
  listarOrdens,
  criarOrdem,
  atualizarOrdem,
  deletarOrdem,
} from "../controllers/ordens.controller.js";

const router = express.Router();

router.get("/", listarOrdens);
router.post("/", criarOrdem);
router.put("/:id", atualizarOrdem);
router.delete("/:id", deletarOrdem);

export default router;
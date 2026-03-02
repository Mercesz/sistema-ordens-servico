import express from "express";
import cors from "cors";
import ordensRoutes from "./routes/ordens.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/ordens", ordensRoutes);

app.listen(3001, () => {
  console.log("🚀 Servidor rodando na porta 3001");
});
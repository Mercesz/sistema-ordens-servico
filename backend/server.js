import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let ordens = [
    {
        id: 1,
        cliente: "João",
        descricao: "Troca de tela",
        status: "Aberta",
    },
    {
        id: 2,
        cliente: "Maria",
        descricao: "Formatação",
        status: "Finalizada",
    },
];

// GET
app.get("/ordens", (req, res) => {
    res.json(ordens);
});

// POST
app.post("/ordens", (req, res) => {
    const novaOrdem = {
        id: ordens.length + 1,
        ...req.body,
    };

    ordens.push(novaOrdem);
    res.status(201).json(novaOrdem);
});

// PUT
app.put("/ordens/:id", (req, res) => {
    const { id } = req.params;

    ordens = ordens.map(ordem =>
        ordem.id == id ? { ...ordem, ...req.body } : ordem
    );

    res.json({ message: "Ordem atualizada" });
});

// DELETE
app.delete("/ordens/:id", (req, res) => {
    const { id } = req.params;

    ordens = ordens.filter(ordem => ordem.id != id);

    res.json({ message: "Ordem removida" });
});

app.listen(3001, () => {
    console.log("🚀 Servidor rodando na porta 3001");
});
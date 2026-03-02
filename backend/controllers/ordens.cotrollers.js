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

export const listarOrdens = (req, res) => {
    res.json(ordens);
};

export const criarOrdem = (req, res) => {
    const novaOrdem = {
        id: ordens.length + 1,
        ...req.body,
    };

    ordens.push(novaOrdem);
    res.status(201).json(novaOrdem);
};

export const atualizarOrdem = (req, res) => {
    const { id } = req.params;

    ordens = ordens.map(ordem =>
        ordem.id == id ? { ...ordem, ...req.body } : ordem
    );

    res.json({ message: "Ordem atualizada" });
};

export const deletarOrdem = (req, res) => {
    const { id } = req.params;

    ordens = ordens.filter(ordem => ordem.id != id);

    res.json({ message: "Ordem removida" });
};
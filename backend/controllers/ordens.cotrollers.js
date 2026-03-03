import Ordem from "../models/Ordem.js";

export const listarOrdens = async (req, res) => {
  try {
    const ordens = await Ordem.find();
    res.status(200).json(ordens);
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar ordens" });
  }
};

export const criarOrdem = async (req, res) => {
  try {
    const novaOrdem = await Ordem.create(req.body);
    res.status(201).json(novaOrdem);
  } catch (error) {
    res.status(400).json({ message: "Erro ao criar ordem" });
  }
};

export const atualizarOrdem = async (req, res) => {
  try {
    const { id } = req.params;

    const ordem = await Ordem.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!ordem) {
      return res.status(404).json({ message: "Ordem não encontrada" });
    }

    res.status(200).json(ordem);
  } catch (error) {
    res.status(400).json({ message: "Erro ao atualizar ordem" });
  }
};

export const deletarOrdem = async (req, res) => {
  try {
    const { id } = req.params;

    const ordem = await Ordem.findByIdAndDelete(id);

    if (!ordem) {
      return res.status(404).json({ message: "Ordem não encontrada" });
    }

    res.status(200).json({ message: "Ordem removida" });
  } catch (error) {
    res.status(400).json({ message: "Erro ao deletar ordem" });
  }
};
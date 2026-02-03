import { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

function NovaOrdem() {
    const [cliente, setCliente] = useState("");
    const [descricao, setDescricao] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        await api.post("/ordens", {
            cliente,
            descricao,
            status: "Aberta"
        });

        navigate("/ordens");
    }

    return (
        <>
            <h1>Nova Ordem</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Cliente"
                    value={cliente}
                    onChange={e => setCliente(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Descrição"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                    required
                />

                <button type="submit">Salvar</button>
            </form>
        </>
    );
}

export default NovaOrdem;

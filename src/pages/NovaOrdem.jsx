import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../App.css";

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
            <Header />

            <div className="app-layout">
                <Sidebar />

                <main className="content">
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
                </main>
            </div>
        </>
    );
}

export default NovaOrdem;

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { api } from "../services/api";
import "../App.css";

function Ordens() {
  const [ordens, setOrdens] = useState([]);

  useEffect(() => {
    api.get("/ordens")
      .then(response => {
        setOrdens(response.data);
      })
      .catch(err => console.error(err));
  }, []);

  function handleUpdateStatus(id, novoStatus) {
    api.patch(`/ordens/${id}`, {
      status: novoStatus
    }).then(() => {
      setOrdens(prev =>
        prev.map(ordem =>
          ordem.id === id
            ? { ...ordem, status: novoStatus }
            : ordem
        )
      );
    });
  }

  return (
    <>
      <Header />

      <div className="app-layout">
        <Sidebar />

        <main className="content">
          <h1>Ordens de Serviços</h1>

          {ordens.map(ordem => (
            <div key={ordem.id} className="card">
              <strong>{ordem.cliente}</strong>
              <p>{ordem.descricao}</p>
              <span>Status: {ordem.status}</span>

              <div className="actions">
                <button
                  onClick={() => handleUpdateStatus(ordem.id, "Em andamento")}
                  disabled={ordem.status !== "Aberta"}
                >
                  Em andamento
                </button>

                <button
                  onClick={() => handleUpdateStatus(ordem.id, "Finalizada")}
                  disabled={ordem.status === "Finalizada"}
                >
                  Finalizar
                </button>
              </div>
            </div>
          ))}

        </main>
      </div>
    </>
  );
}

export default Ordens;

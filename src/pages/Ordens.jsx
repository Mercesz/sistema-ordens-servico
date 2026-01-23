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
        console.log("RESPONSE>DATA", response.data)
        setOrdens(response.data);
      })
      .catch(err => console.error(err));
  }, []);

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
            </div>
          ))}

        </main>
      </div>
    </>
  );
}

export default Ordens;

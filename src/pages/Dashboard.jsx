import { useOrdens } from "../hooks/useOrdens";
import "../App.css";

function Dashboard() {
  const { ordens, loading } = useOrdens();

  const total = ordens.length;
  const abertas = ordens.filter(o => o.status === "Aberta").length;
  const andamento = ordens.filter(o => o.status === "Em andamento").length;
  const finalizadas = ordens.filter(o => o.status === "Finalizada").length;

  const ultimasOrdens = [...ordens]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);

  return (
    <>
      <h1>Dashboard</h1>

      {/* Cards resumo */}
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <span>Total</span>
          <strong>{total}</strong>
        </div>

        <div className="dashboard-card aberta">
          <span>Abertas</span>
          <strong>{abertas}</strong>
        </div>

        <div className="dashboard-card andamento">
          <span>Em andamento</span>
          <strong>{andamento}</strong>
        </div>

        <div className="dashboard-card finalizada">
          <span>Finalizadas</span>
          <strong>{finalizadas}</strong>
        </div>
      </div>

      {/* Últimas ordens */}
      <h2 className="dashboard-subtitle">Últimas ordens</h2>

      {loading && <p>Carregando...</p>}

      {!loading && ultimasOrdens.length === 0 && (
        <p>Nenhuma ordem cadastrada</p>
      )}

      <div className="dashboard-list">
        {ultimasOrdens.map(ordem => (
          <div key={ordem.id} className="dashboard-item">
            <strong>{ordem.cliente}</strong>
            <p>{ordem.descricao}</p>

            <span
              className={`status ${ordem.status
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              {ordem.status}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Dashboard;

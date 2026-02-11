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

      {/* Conteúdo abaixo */}
      <div className="dashboard-bottom">
        <div className="dashboard-placeholder">
          <h2>Resumo</h2>
          <p>Área reservada para gráficos ou métricas futuras</p>
        </div>

        <div className="dashboard-latest">
          <h2>Últimas ordens</h2>

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
        </div>
      </div>
    </>
  );
}

export default Dashboard;

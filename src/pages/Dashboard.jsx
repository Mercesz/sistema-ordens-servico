import { useOrdens } from "../hooks/useOrdens";
import "../App.css";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  const { ordens, loading } = useOrdens();

  const total = ordens.length;

  // Contagem por status
  const abertas = ordens.filter(o => o.status === "Aberta").length;
  const andamento = ordens.filter(o => o.status === "Em andamento").length;
  const finalizadas = ordens.filter(o => o.status === "Finalizada").length;

  // Função para calcular porcentagem
  const porcentagem = (valor) => {
    if (total === 0) return 0;
    return Math.round((valor / total) * 100);
  };

  const abertasPct = porcentagem(abertas);
  const andamentoPct = porcentagem(andamento);
  const finalizadasPct = porcentagem(finalizadas);

  // Últimas 5 ordens
  const ultimasOrdens = [...ordens]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);

  return (
    <>
      <h1>Dashboard</h1>

      <div className="dashboard-cards">
        <DashboardCard
          titulo="Total"
          valor={total}
        />

        <DashboardCard
          titulo="Abertas"
          valor={abertas}
          porcentagem={abertasPct}
          tipo="aberta"
        />

        <DashboardCard
          titulo="Em andamento"
          valor={andamento}
          porcentagem={andamentoPct}
          tipo="andamento"
        />

        <DashboardCard
          titulo="Finalizadas"
          valor={finalizadas}
          porcentagem={finalizadasPct}
          tipo="finalizada"
        />
      </div>

      {/* Conteúdo abaixo */}
      < div className="dashboard-bottom" >
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
      </div >
    </>
  );
}

export default Dashboard;
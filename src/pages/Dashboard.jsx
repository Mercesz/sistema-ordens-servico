import { useOrdens } from "../hooks/useOrdens";
import "../App.css";
import DashboardCard from "../components/DashboardCard";
import DashboardChart from "../components/DashboardChart";

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

      <div className="dashboard-placeholder">
        <h2>Resumo</h2>
        <DashboardChart
          abertas={abertas}
          andamento={andamento}
          finalizadas={finalizadas}
        />
      </div>
    </>
  );
}

export default Dashboard;
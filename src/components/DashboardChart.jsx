import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    plugins,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function DashboardChart({ abertas, andamento, finalizadas }) {
    const data = {
        labels: ["Abertas", "Em andamento", "Finalizadas"],
        datasets: [{
            label: "Ordens",
            data: [abertas, andamento, finalizadas],
            backgroundColor: [
                "#f59e0b",
                "#3b82f6",
                "#10b981"
            ],
        }
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return <Bar data={data} options={options} />
};

export default DashboardChart;
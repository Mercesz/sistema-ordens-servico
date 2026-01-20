import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../App.css";

function Dashboard() {
  return (
    <>
      <Header />

      <div className="app-layout">
        <Sidebar />

        <main className="content">
          <h1>Dashboard</h1>
        </main>
      </div>
    </>
  );
}

export default Dashboard;

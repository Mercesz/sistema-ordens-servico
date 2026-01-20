import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../App.css";

function NovaOrdem() {
    return (
        <>
            <Header />

            <div className="app-layout">
                <Sidebar />

                <main className="content">
                    <h1>Nova Ordem</h1>
                </main>
            </div>
        </>
    );
}

export default NovaOrdem;

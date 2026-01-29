import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    function handleLogout() {
        navigate("/");
    }

    return (
        <header className="header">
            <h1>Sistema OS</h1>

            <nav className="nav">
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/ordens">Ordens</NavLink>
                <NavLink to="/nova-ordem">Nova Ordem</NavLink>
            </nav>

            <button onClick={handleLogout}>Sair</button>
        </header>
    );
}

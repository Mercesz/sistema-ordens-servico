import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./Header.css";

function Header() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
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

export default Header;

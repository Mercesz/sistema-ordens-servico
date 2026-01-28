import './Header.css';
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from 'react-router-dom';

function Header() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/");
    }

    return (
        <header className="header">
            <h2>Sistema OS</h2>
            <button onClick={handleLogout}>Sair</button>
        </header>
    )
}

export default Header;
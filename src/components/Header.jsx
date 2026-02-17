import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <h3>Bem-vindo</h3>

      <div className="header-right">
        <span>{user?.email}</span>
        <button onClick={logout}>Sair</button>
      </div>
    </header>
  );
}

export default Header;

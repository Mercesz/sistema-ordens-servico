import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sidebar">
            <h3>Menu</h3>

            <ul>
                <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/ordens">Ordens</NavLink>
                </li>
                <li>
                    <NavLink to="/nova-ordem">Nova Ordem</NavLink>
                </li>

                <li>
                    <NavLink to="/clientes">Clientes</NavLink>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
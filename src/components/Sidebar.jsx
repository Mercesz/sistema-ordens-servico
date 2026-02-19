import { NavLink, useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return (
        <aside className="sidebar">
            <h3>Menu</h3>

            <ul>
                <li>
                    <NavLink
                        to="/dashboard"
                        className={isActive("/dashboard") ? "menu-item active" : "menu-item"}
                    >Dashboard</NavLink>
                </li>

                <li>
                    <NavLink
                        to="/ordens"
                        className={isActive("/ordens") ? "menu-item active" : "menu-item"}
                    >Ordens</NavLink>
                </li>

                <li>
                    <NavLink
                        to="/nova-ordem"
                        className={isActive("/nova-ordem") ? "menu-item active" : "menu-item"}
                    >Nova Ordem</NavLink>
                </li>

                <li>
                    <NavLink
                        to="/clientes"
                        className={isActive("/clientes") ? "menu-item active" : "menu-item"}
                    >Clientes</NavLink>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
    return (
        <aside className="sidebar">
            <h3>Menu</h3>

            <ul>
                <li>
                    <NavLink to="/dashboard" end>
                        Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/ordens">
                        Ordens
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/nova-ordem">
                        Nova Ordem
                    </NavLink>
                </li>

            </ul>
        </aside>
    );
}


export default Sidebar;
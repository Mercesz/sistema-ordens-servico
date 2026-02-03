import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <NavLink to="/dashboard">Home</NavLink>
            <NavLink to="/ordens">Projetos</NavLink>
        </aside>
    );
}

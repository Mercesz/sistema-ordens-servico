import "./Layout.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Header />

            <div className="app-layout">
                <Sidebar />

                <main className="content">
                    <Outlet />
                </main>
            </div>
        </>
    );
}

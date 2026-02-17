import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Ordens from "./pages/Ordens";
import NovaOrdem from "./pages/NovaOrdem";
import Layout from "./components/Layout";
import Clientes from "./pages/Clientes"
import { PrivateRoute } from "./routes/PrivateRoute";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route
                    element={
                        <PrivateRoute>
                            <Layout />
                        </PrivateRoute>
                    }
                >
                    <Route path="/clientes" element={<Clientes />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/ordens" element={<Ordens />} />
                    <Route path="/nova-ordem" element={<NovaOrdem />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

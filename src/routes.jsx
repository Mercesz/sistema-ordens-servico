import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard";
import Ordens from "./pages/Ordens";
import NovaOrdem from "./pages/NovaOrdem";

import PrivateRoute from "./routes/PrivateRoute";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rotas públicas */}
                <Route path="/" element={<Login />} />

                {/* Privadas */}
                <Route
                    path="/home"
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/ordens"
                    element={
                        <PrivateRoute>
                            <Ordens />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/nova-ordem"
                    element={
                        <PrivateRoute>
                            <NovaOrdem />
                        </PrivateRoute>
                    }
                />
                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
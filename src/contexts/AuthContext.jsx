import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    function login(email, password) {
        //login fake
        if (email && password) {
            const fakeUser = { email };
            setUser(fakeUser);
            localStorage.setItem("user", JSON.stringify(fakeUser));
            return true;
        }
        return false;
    }

    function logout() {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
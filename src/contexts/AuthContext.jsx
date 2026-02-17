import { useMemo, useState } from "react";
import { AuthContext } from "./auth-context";

function getStoredUser() {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getStoredUser);

  function login(email, password) {
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

  const value = useMemo(
    () => ({ user, loading: false, login, logout }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

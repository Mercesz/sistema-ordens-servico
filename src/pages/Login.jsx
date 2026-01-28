import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const success = login(email, senha);
    if (success) {
      navigate("/dashboard");
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" onChange={e => setSenha(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;

import { useState, useEffect } from "react";

export default function Clientes() {
  const [showModal, setShowModal] = useState(false);

  const [clientes, setClientes] = useState(() => {
    try {
      const dados = localStorage.getItem("clientes");
      return dados ? JSON.parse(dados) : [];
    } catch (error) {
      console.error("Erro ao carregar clientes:", error);
      localStorage.removeItem("clientes");
      return [];
    }
  });

  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    cidade: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoCliente = {
      id: Date.now(),
      ...formData
    };

    setClientes([...clientes, novoCliente]);

    setFormData({
      nome: "",
      telefone: "",
      email: "",
      cidade: ""
    });

    setShowModal(false);
  };

  useEffect(() => {
    localStorage.setItem("clientes", JSON.stringify(clientes));
  }, [clientes]);


  // Função de ver cliente
  const verCliente = (cliente) => {
    alert(
      `Nome: ${cliente.nome}
Telefone: ${cliente.telefone}
Email: ${cliente.email}
Cidade: ${cliente.cidade}`
    );
  };

  return (
    <div className="page-container">

      {/* Cabeçalho */}
      <div className="page-header">
        <h1>Clientes</h1>
        <button
          className="btn-primary"
          onClick={() => setShowModal(true)}
        >
          Novo Cliente
        </button>
      </div>

      {/* Tabela de clientes */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Cidade</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {clientes.length === 0 ? (
              <tr>
                <td colSpan="5">Nenhum cliente cadastrado</td>
              </tr>
            ) : (
              clientes.map((cliente, index) => (
                <tr key={cliente.id}>
                  <td>{cliente.nome}</td>
                  <td>{cliente.telefone}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.cidade}</td>
                  <td>
                    <button onClick={() => verCliente(cliente)}>Ver</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
        {showModal && (
          <div className="modal-overlay">

            <div className="modal">

              <h2>Novo Cliente</h2>

              <form onSubmit={handleSubmit}>

                <input
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Nome"
                />

                <input
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="Telefone"
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />

                <input
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  placeholder="Cidade"
                />


                <div className="modal-actions">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>

                  <button type="submit" className="btn-primary">
                    Salvar
                  </button>
                </div>

              </form>

            </div>

          </div>
        )}

      </div >

    </div >
  );
}

import { useState, useEffect } from "react";

export default function Clientes() {

  const [showModal, setShowModal] = useState(false);
  const [clienteEditando, setClienteEditando] = useState(null);

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

  const limparFormulario = () => {
    setFormData({
      nome: "",
      telefone: "",
      email: "",
      cidade: ""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EDITAR
    if (clienteEditando) {
      const clientesAtualizados = clientes.map(c =>
        c.id === clienteEditando.id
          ? { ...c, ...formData }
          : c
      );

      setClientes(clientesAtualizados);
      setClienteEditando(null);
    }
    // NOVO
    else {
      const novoCliente = {
        id: Date.now(),
        ...formData
      };

      setClientes([...clientes, novoCliente]);
    }

    limparFormulario();
    setShowModal(false);
  };

  const verCliente = (cliente) => {
    alert(
      `Nome: ${cliente.nome}
Telefone: ${cliente.telefone}
Email: ${cliente.email}
Cidade: ${cliente.cidade}`
    );
  };

  const editarCliente = (cliente) => {
    setClienteEditando(cliente);
    setFormData({
      nome: cliente.nome,
      telefone: cliente.telefone,
      email: cliente.email,
      cidade: cliente.cidade
    });
    setShowModal(true);
  };

  // PERSISTÊNCIA
  useEffect(() => {
    localStorage.setItem("clientes", JSON.stringify(clientes));
  }, [clientes]);

  return (
    <div className="page-container">

      {/* CABEÇALHO */}
      <div className="page-header">
        <h1>Clientes</h1>
        <button
          className="btn-primary"
          onClick={() => {
            limparFormulario();
            setClienteEditando(null);
            setShowModal(true);
          }}
        >
          Novo Cliente
        </button>
      </div>

      {/* TABELA */}
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
              clientes.map(cliente => (
                <tr key={cliente.id}>
                  <td>{cliente.nome}</td>
                  <td>{cliente.telefone}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.cidade}</td>
                  <td>
                    <button onClick={() => verCliente(cliente)}>
                      Ver
                    </button>

                    <button onClick={() => editarCliente(cliente)}>
                      Editar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* MODAL */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal">

              <h2>
                {clienteEditando ? "Editar Cliente" : "Novo Cliente"}
              </h2>

              <form onSubmit={handleSubmit}>

                <input
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Nome"
                  required
                />

                <input
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="Telefone"
                  required
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />

                <input
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  placeholder="Cidade"
                  required
                />

                <div className="modal-actions">
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setClienteEditando(null);
                      limparFormulario();
                    }}
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

      </div>
    </div>
  );
}
import { useState } from "react";

export default function Clientes() {
  const [showModal, setShowModal] = useState(false);

  const [clientes, setClientes] = useState([]);

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

    setClientes([...clientes, formData]);

    setFormData({
      nome: "",
      telefone: "",
      email: "",
      cidade: ""
    });

    setShowModal(false);
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
                <tr key={index}>
                  <td>{cliente.nome}</td>
                  <td>{cliente.telefone}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.cidade}</td>
                  <td>
                    <button>Ver</button>
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

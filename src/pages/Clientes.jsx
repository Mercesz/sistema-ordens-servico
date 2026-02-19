import { useState } from "react";

export default function Clientes() {
  const [showModal, setShowModal] = useState(false);

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
            <tr>
              <td>João Silva</td>
              <td>(11) 99999-9999</td>
              <td>joao@email.com</td>
              <td>São Paulo</td>
              <td>
                <button>Ver</button>
              </td>
            </tr>

            <tr>
              <td>Maria Souza</td>
              <td>(11) 88888-8888</td>
              <td>maria@email.com</td>
              <td>Campinas</td>
              <td>
                <button>Ver</button>
              </td>
            </tr>
          </tbody>
        </table>
        {showModal && (
          <div className="modal-overlay">

            <div className="modal">

              <h2>Novo Cliente</h2>

              <form>

                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Telefone" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Cidade" />

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

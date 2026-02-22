function OrdemCard({ ordem, updateStatus, deleteOrdem }) {
    return (
        <div className="card">
            <strong>{ordem.cliente}</strong>
            <p>{ordem.descricao}</p>

            <span className={`status ${ordem.status.toLowerCase().replace(" ", "-")}`}>
                Status: {ordem.status}
            </span>

            <div className="actions">
                <button
                    onClick={() => updateStatus(ordem.id, "Em andamento")}
                    disabled={ordem.status !== "Aberta"}
                >
                    Em andamento
                </button>

                <button
                    onClick={() => updateStatus(ordem.id, "Finalizada")}
                    disabled={ordem.status === "Finalizada"}
                >
                    Finalizar
                </button>

                <button className="danger" onClick={() => deleteOrdem(ordem.id)}>
                    Excluir
                </button>
            </div>
        </div>
    );
}

export default OrdemCard;
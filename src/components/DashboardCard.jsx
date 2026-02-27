function DashboardCard({ titulo, valor, porcentagem, tipo }) {
    return (
        <div className={`dashboard-card ${tipo}`}>
            <span>{titulo}</span>
            <strong>{valor}</strong>

            {porcentagem !== undefined && (
                <>
                    <small>{porcentagem}% do total</small>

                    <div className="progress-bar">
                        <div
                            className="progress"
                            style={{ width: `${porcentagem}%` }}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default DashboardCard;
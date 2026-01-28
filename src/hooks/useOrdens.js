import { useEffect, useState } from "react";
import { api } from "../services/api";

export function useOrdens() {
    const [loading, setLoading] = useState(true);
    const [ordens, setOrdens] = useState([]);

    useEffect(() => {
        api.get("/ordens")
            .then(response => setOrdens(response.data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    function updateStatus(id, status) {
        return api.patch(`/ordens/${id}`, { status }).then(() => {
            setOrdens(prev =>
                prev.map(o => o.id === id ? { ...o, status } : o)
            );
        });
    }

    function deleteOrdem(id) {
        return api.delete(`/ordens/${id}`).then(() => {
            setOrdens(prev => prev.filter(o => o.id !== id));
        });
    }

    return {
        ordens,
        loading,
        updateStatus,
        deleteOrdem
    };
}
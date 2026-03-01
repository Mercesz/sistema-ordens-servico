import { useEffect, useState } from "react";

export function useOrdens() {
    const [ordens, setOrdens] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3001/ordens")
            .then(res => res.json())
            .then(data => {
                setOrdens(data);
                setLoading(false);
            });
    }, []);

    return { ordens, loading };
}
import { useEffect, useState } from "react";

const useFetchData = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const url = "https://emojihub.yurace.pro/api/all" + endpoint;
            try {
                const res = await fetch(url);
                const jsonData = await res.json();
                console.log(jsonData);
                setData(jsonData);
            } catch (error) {
                setError(error.message);
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);
    return { data, loading, error };
};

export default useFetchData;

import { useEffect, useState } from "react";

const useAllProperties = () => {
    const [allProperties, setAllProperties] = useState([]);
    const[loading, setLoading]= useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/AllProperties')
            .then(res => res.json())
            .then(data => {
                setAllProperties(data);
                setLoading(false);
            })
    }, [])
    return [allProperties,loading]
};

export default useAllProperties;
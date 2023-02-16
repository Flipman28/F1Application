import { useState, useEffect } from "react";

const useF1s = () => {
    const [allF1s, setAllF1s] = useState([]);

    useEffect(() => {
      const fetchF1 = async () => {
        const rsp = await fetch("/f1.json");
        const f1s = await rsp.json();
        setAllF1s(f1s);
      }
      fetchF1();  
    }, []);

    return allF1s;
}

export default useF1s;
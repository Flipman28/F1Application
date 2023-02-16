import { useParams } from "react-router-dom";
import F1 from "./";
import { useContext } from "react";
import F1sContext from "../context/f1sContext";

const F1FromQuery = () => {
    const {id} = useParams();
    const allF1s = useContext(F1sContext);
    const f1 = allF1s.find((f) => f.id === parseInt(id));

    if(!f1) return <div>F1 introuvable!</div>;
    return <F1 f1 = {f1}></F1>;
}
 
export default F1FromQuery;
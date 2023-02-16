import { useContext } from "react";
import { useHistory } from "react-router-dom";
import F1sContext from "../context/f1sContext";

const F1Filter = () => {
    const history = useHistory();
    const allF1s = useContext(F1sContext);

    const countries = allF1s 
    ? Array.from(new Set(allF1s.map((f) => f.country))) 
    : [];
    countries.unshift(null);

    const onSearchChange = (e) => {
        const country = e.target.value;
        history.push(`/searchresults/${country}`);
    }

    return ( 
        <div className="row mt-3">
            <div className="offset-md-2 col-md-4">
                Choisie le pays associé aux constructeurs
            </div>
            <div className="col-md-4 mb-3">
                <select className="form-select" onChange={onSearchChange}>
                    {countries.map((c) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
 
export default F1Filter;
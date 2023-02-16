import SearchResultsRow from "./search-results-row";
import { useParams } from "react-router-dom";
import "./search-results.css";
import { useContext } from "react";
import F1sContext from "../context/f1sContext";

const SearchResults = () => {
    const { country } = useParams();
    const allF1s = useContext(F1sContext);

    const filteredF1s = allF1s.filter((f) => f.country === country); 

    return (
        <div className="mt-2">
            <h4> Résultats pour {country}:</h4>
            <table className="table table-hover">
                <tbody>
                    {filteredF1s.map((f) => (
                        <SearchResultsRow key={f.id} f1={f}></SearchResultsRow>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SearchResults;
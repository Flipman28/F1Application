import { useHistory } from "react-router-dom";
import "./search-results.css";

const SearchResultsRow = ({ f1 }) => {
    const history = useHistory();
    const setActive = () => {
        history.push(`/f1/${f1.id}`);
    };

    return (
        <tr onClick={setActive}>
            <td>{f1.name}</td>
            <td>{f1.budget}€</td>
            <td>{f1.description}</td>
        </tr>
    );
};

export default SearchResultsRow;
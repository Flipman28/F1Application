import "./f1.css";
import emailIcon from "./emailIcon.png"
import Inquiry from "./Inquiry";
import { useState } from "react";

const F1 = ({f1}) => {
    const [inquiryShown, setInquiryShown] = useState(false);
    const inquiryClick = () => {
        setInquiryShown(!inquiryShown);
    };

    return ( 
        <div>
            <div className="row mt-2">
                <h5 className="col-md-12 text center">{f1.name}</h5>
            </div>
            <div className="row">
                <h3 className="col-md-12 text center">{f1.country}</h3>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <img src={`/images/${f1.photo}.jpg`} alt="F1" />
                </div>
                <div className="col-md-5">
                    <p className="budget" type="number">{f1.budget}€</p>
                    <p>{f1.description}</p>
                    <img 
                      src={emailIcon}
                      height="20"
                      alt="inquiry"
                      onClick={inquiryClick}
                    />
                    {inquiryShown && <Inquiry f1={f1} />}
                </div>
            </div>
        </div>
     );
}
 
export default F1;
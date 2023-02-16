import F1 from "../f1";

const FeaturedF1 = ({f1}) => {
    if (f1)
        return ( 
            <div>
                <div className="row featuredF1">
                    <h3 className="text-center featuredCars">Featured F1</h3>
                </div>
                <F1 f1={f1}/>
            </div>
        );
    return <div>No featured F1 at this time</div>;
}
 
export default FeaturedF1; 
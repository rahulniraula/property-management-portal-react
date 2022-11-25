import { useParams } from "react-router-dom";
import PropertyRow from "../property-row";

const Category=()=>{
    const params=useParams();
    return (
        <PropertyRow title={params.type } axios={{url:'/public/properties/',params:{propertyType:params.type}}}></PropertyRow>
        // <p>From child</p>
        );
}
export default Category;
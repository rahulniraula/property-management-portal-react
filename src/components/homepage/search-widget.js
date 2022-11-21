import "./style.css";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
const PropertySearchBar=()=>{
    return (
        <div className="search-bar col-md-7">
            <input type="text" className="form-control p-3" placeholder="Enter an address, city or zip code"/>
            <i className="bi bi-search"></i>
        </div>
    );
}
export default PropertySearchBar;
import "./style.css";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";
import {useRef} from "react";
const PropertySearchBar=()=>{
    const navigate=useNavigate();
    const searchForm=useRef();
    function submitForm(){
        navigate("/search?"+new URLSearchParams({q:searchForm.current.searchBox.value}).toString())
    }
    return (
        <div className="search-bar col-md-7">
            <form onSubmit={submitForm} ref={searchForm}>
                <input type="text" name={"searchBox"} className="form-control p-3" placeholder="Enter an address, city or zip code"/>
            </form>
            <i className="bi bi-search"></i>
        </div>
    );
}
export default PropertySearchBar;
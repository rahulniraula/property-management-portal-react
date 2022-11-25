import SideSearchBar from "./side-search-bar";
import SearchContext from "./search-context";
import {useEffect, useState} from "react";
import axios from "axios";
import PropertyRow from "../properties/property-row";

const SearchResult=()=>{
    const [searchCriteria,setSearchCriteria]=useState({});
    const [products,setProducts]=useState([]);
    useEffect(()=>fetchProducts(),[searchCriteria])
    function fetchProducts(){
        axios({
            url:'/properties/',
            params:searchCriteria
        }).then(resp=>{
            setProducts(resp.data);
        }).catch()
    }
    return (
        <div className={"row"}>
            <div className="col-3">
                <SearchContext.Provider value={{searchCriteria,setSearchCriteria}}>
                    <SideSearchBar></SideSearchBar>
                </SearchContext.Provider>
            </div>
            <div className="col-9">
                <PropertyRow title={"Title" } axios={{url:'/properties/'}}></PropertyRow>
            </div>
        </div>
    );
}
export default SearchResult;
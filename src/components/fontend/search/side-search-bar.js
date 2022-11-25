import {Card} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useContext, useEffect, useRef, useState} from "react";
import SearchContext from "./search-context";
import axios from "axios";
const SideSearchBar=()=>{
    const searchForm=useRef();
    const searchContext=useContext(SearchContext);
    const [propertyType,setPropertyType]=useState([]);
    const [propertyStatus,setPropertyStatus]=useState([])
    useEffect(fetchPropertyType,[])
    useEffect(fetchPropertyStatus,[])

    function search(event){
        event.preventDefault();
        let data=searchForm.current;
        let title=searchForm.current.query.value;
        let propertyType=searchForm.current.propertyType.value;
        let propertyStatus=searchForm.current.propertyStatus.value;
        let minPrice=searchForm.current.minPrice.value;
        let maxPrice=searchForm.current.maxPrice.value;
        let area=searchForm.current.area.value;
        let heatingSystem=searchForm.current.heatingSystem.value;
        let coolingSystem=searchForm.current.coolingSystem.value;
        let parking=searchForm.current.parking.value;
        let searchData={title,propertyType,propertyStatus,maxPrice,minPrice,area,heatingSystem,coolingSystem,parking}
        searchContext.setSearchCriteria(searchData);
    }
    function fetchPropertyType(){
        axios({
            url:'/configs/property-type/'
        }).then(resp=>{
            setPropertyType(resp.data)
        }).catch()
    }
    function fetchPropertyStatus(){
        axios({
            url:'/configs/property-status/'
        }).then(resp=>{
            setPropertyStatus(resp.data)
        }).catch()
    }

    return (
        <div className="row mt-3">
            <div className="col-12">
                <Card>
                    <CardHeader className={"bg-primary"}>
                        <Card.Title className={"text-white"}>Advanced Search</Card.Title>
                    </CardHeader>
                    <Card.Body>
                        <form ref={searchForm} onSubmit={search}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Property Keyword</Form.Label>
                                <Form.Control name="query" type="text" placeholder="Enter Search Term" />
                                <Form.Text className="text-muted">
                                    You can search using address, zip, city, etc.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Property Type</Form.Label>
                                <select name="propertyType" className={"form-control"}>
                                    {propertyType.map(p=><option key={p} value={p}>{p}</option>)}
                                </select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Property Status</Form.Label>
                                <select name="propertyStatus" className={"form-control"}>
                                    {propertyStatus.map(i=><option key={i} value={i}>{i}</option>)}
                                </select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Min Price</Form.Label>
                                <Form.Control name="minPrice" type="number" placeholder="Enter Min Price" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Max Price</Form.Label>
                                <Form.Control name="maxPrice" type="number" placeholder="Enter Max Price" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Area (Sq.ft)</Form.Label>
                                <select name="area" className={"form-control"}>
                                    {["100","300","500","900","1000+"].map(i=><option  key={i} value={i}>{i}</option>)}
                                </select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Number Of Rooms</Form.Label>
                                <select name="rooms" className={"form-control"}>
                                    {[1,2,3,4,5].map(i=><option  key={i} value={i}>{i}</option>)}
                                </select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Heating System</Form.Label>
                                <select name="heatingSystem" className={"form-control"}>
                                    {["Yes","No"].map(i=><option  key={i} value={i}>{i}</option>)}
                                </select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Cooling System</Form.Label>
                                <select name="coolingSystem" className={"form-control"}>
                                    {["Yes","No"].map(i=><option  key={i} value={i}>{i}</option>)}
                                </select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Parking</Form.Label>
                                <select name="parking" className={"form-control"}>
                                    {["Yes","No"].map(i=><option  key={i} value={i}>{i}</option>)}
                                </select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Search
                            </Button>
                        </form>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
}
export default SideSearchBar;
import SingleProperty from "./single-property";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardHeader from "react-bootstrap/CardHeader";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
const PropertyRow=(props)=>{
    const [properties,setProperties]=useState([]);
    useEffect(fetchProperties,[props.axios])
    const title=useRef();
    function fetchProperties(){
        let c={
            ...props.axios
        };
        c.params.title=title.current.value;
        axios(c).then(resp=>{
            setProperties(resp.data)
        }).catch(

        )
    }

    return (
        <div className="row mt-3">
            <div className="col-12">
                <Card>
                    <CardHeader className={"bg-primary"} style={{padding:'0px'}}>
                        <div className="row">
                            <div className="col-9 text-white"><Card.Title className={"text-white mx-3"}>{props.title}</Card.Title></div>
                            <div className="col-3"><input onChange={fetchProperties} ref={title} placeholder={"Search"} className={"form-control mt-3 "}/></div>
                        </div>
                    </CardHeader>
                    <Card.Body>

                        <div className="row">
                            {properties.map(property=><SingleProperty key={property.id} property={property}></SingleProperty>)}
                        </div>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
}
export default PropertyRow;
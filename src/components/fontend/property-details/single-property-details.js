import HomePageSlider from "../homepage/homepage-slider";
import CustomerEnquiry from "./customer-enquiry";
import Badge from 'react-bootstrap/Badge';
import {House,Share,Envelope} from 'react-bootstrap-icons';
import PropertyDetailsIcons from "./property-details-icons";
import Accordion from "./accordion/accordion-wrapper";
import AccordionWrapper from "./accordion/accordion-wrapper";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
const SinglePropertyDetails=(props)=>{
    const navigate=useNavigate();
    const [property,setProperty]=useState({});
    const params=useParams();
    useEffect(fetchProperty,[])
    function fetchProperty(){
        axios({
            url:'/public/properties/'+params.id
        }).then(resp=>{
            setProperty(resp.data)
        }).catch();
    }
    return (
        <div className={"row"}>
            <div className={"col-8"}>
                <HomePageSlider></HomePageSlider>
                <div className="row">
                    <div className="col-12">
                        <Badge bg="primary">For Sale</Badge>
                    </div>
                    <div className="col-8">
                        <h4>{property.price}</h4>
                        <div className="row mt-1">
                            <div className="col-4">
                                {property?.details?.noOfRooms} <b>bed</b>
                            </div>
                            <div className="col-4">
                                {property.area} <b>Sq.ft</b>
                            </div>
                            <div className="col-4">
                                3 <b>bed</b>
                            </div>
                            <div className="col-12 mt-3">
                                <i>2050 Granville Rd, Fairfield, IA 52556</i>
                            </div>
                            <div className="row mt-3">
                                {[1,2,3,4,5,6].map(i=><PropertyDetailsIcons key={i}></PropertyDetailsIcons>)}

                            </div>
                        </div>
                    </div>
                    <div className="col-6">

                    </div>
                    <div className="col-12">
                        <AccordionWrapper property={property}></AccordionWrapper>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <CustomerEnquiry></CustomerEnquiry>
            </div>
        </div>
    );
}
export default SinglePropertyDetails;
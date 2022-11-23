import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import {HeartFill,Share,Envelope} from 'react-bootstrap-icons';
import {Link, useNavigate} from "react-router-dom";
import MyModal from "../shared/MyModal";
import {useState} from "react";
import CustomerEnquiry from "../property-details/customer-enquiry";
function SingleProperty(props) {
    const navigate=useNavigate();
    const [showModal,setShowModal]=useState(false);
    function addToFavouriteList(event){
        event.stopPropagation();
        console.log("Added to favourite");
    }
    function contactOwner(event){
        event.stopPropagation();
        setShowModal(true);
    }
    function handleClose(){
        setShowModal(false);
    }
    return (
        <div className="col-4 mt-4">
            <MyModal show={showModal} handleClose={handleClose} title={"Inquirey"}>
                <CustomerEnquiry></CustomerEnquiry>
            </MyModal>
                <Card onClick={()=>navigate("/property-details/1")} style={{cursor:"pointer"}}>
                    {/*<Card.Img variant="top" src={props.product.image} />*/}
                    <Card.Img variant="top" src="https://picsum.photos/200/100" >

                    </Card.Img>
                    <Card.Body>
                        <Badge bg="success">
                            Property Type
                        </Badge>
                        <Card.Title>12500</Card.Title>
                        {/*<Card.Text>*/}
                        <div className="row">
                            <div className="col-4">
                                3 <b>bed</b>
                            </div>
                            <div className="col-4">
                                3 <b>Sq.ft</b>
                            </div>
                            <div className="col-4">
                                3 <b>bed</b>
                            </div>
                            <div className="col-12">
                                <i>Address</i>
                            </div>
                        </div>


                        {/*</Card.Text>*/}
                        {/*<Card.Title>{props.product.price}</Card.Title>*/}
                        <Card.Text>
                            {/*Some quick example text to build on the card title and make up the*/}
                            {/*bulk of the card's content.*/}
                        </Card.Text>
                        <div className="row">
                            <div className="col-6">
                                <Button onClick={addToFavouriteList} title={"Add To Favourite List"} className="btn btn-danger"><HeartFill></HeartFill></Button>

                            </div>
                            {/*<div className="col-4">*/}
                            {/*    <Button title={"Share Item"} className="btn btn-primary"><Share></Share></Button>*/}
                            {/*</div>*/}
                            <div className="col-6">
                                <Button onClick={contactOwner} title={"Contact the Owner"} className="btn float-end btn-success"><Envelope></Envelope></Button>

                            </div>
                        </div>
                    </Card.Body>
                </Card>


        </div>
    );
}

export default SingleProperty;
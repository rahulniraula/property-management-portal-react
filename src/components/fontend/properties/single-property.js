import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import {HeartFill,Envelope,CurrencyDollar} from 'react-bootstrap-icons';
import {Link, useNavigate} from "react-router-dom";
import MyModal from "../shared/MyModal";
import {useState} from "react";
import CustomerEnquiry from "../property-details/customer-enquiry";
import Offer from "./offer";
import AddToFavoriteList from "../favorite/add-to-favorite-list";
import FavoriteWrapper from "../favorite/favorite-wrapper";
import {isLoggedIn} from "../../../util/util";
function SingleProperty(props) {
    const navigate=useNavigate();
    const [showModal,setShowModal]=useState(false);
    const [showOfferModal,setShowOfferModal]=useState(false);
    const [showFavoriteModal,setShowFavoriteModal]=useState(false);

    function contactOwner(event){
        event.stopPropagation();
        setShowModal(true);
        // if(!isLoggedIn()){
        //     navigate("/login")
        // }else{
        //     setShowModal(true);
        // }
    }
    function handleClose(){
        setShowModal(false);
    }
    function makeOffer(event){
        event.stopPropagation();
        if(!isLoggedIn()){
            navigate("/login")
        }else{
            setShowOfferModal(true)
        }
    }
    function handleOfferClose(){
        setShowOfferModal(false)
    }
    function handelFavoriteClose(){
        setShowFavoriteModal(false);
    }
    function addToFavouriteList(event){
        event.stopPropagation();
        if(!isLoggedIn()){
            navigate("/login")
        }else{
            setShowFavoriteModal(true)
        }
    }
    function getImage(){
        let images=props?.property?.images;
        if(images){
            return images[0]?.url;
        }
        return "https://picsum.photos/200/100"
    }
    function success(){

    }
    return (
        <div className="col-4 mt-4">
            <MyModal show={showOfferModal} handleClose={handleOfferClose} title={props.property.title}>
                <Offer property={props.property} success={handleOfferClose}></Offer>
            </MyModal>
            <MyModal show={showFavoriteModal} handleClose={handelFavoriteClose} title={props.property.title}>
                <FavoriteWrapper property={props.property} success={handelFavoriteClose}></FavoriteWrapper>
            </MyModal>
            <MyModal show={showModal} handleClose={handleClose} title={props.property.title}>
                <CustomerEnquiry property={props.property}></CustomerEnquiry>
            </MyModal>
                <Card onClick={()=>navigate("/property-details/"+props.property.id)} style={{cursor:"pointer"}}>
                    {/*<Card.Img variant="top" src={props.product.image} />*/}
                    <Card.Img variant="top" src={getImage()} >
                    </Card.Img>
                    <div className="col-16" style={{position:'absolute',top:'0px',right:'0px'}}>
                        <Button onClick={addToFavouriteList} title={"Add To Favourite List"} className="btn btn-danger"><HeartFill></HeartFill></Button>
                    </div>
                    <Card.Body>
                        <Badge bg="success" style={{fontSize:'10px'}}>
                            {props?.property?.propertyType}
                        </Badge>
                        <Badge bg="success mx-3" style={{fontSize:'10px'}}>
                            {props?.property?.status}
                        </Badge>
                        <Card.Title>
                            {props?.property?.price}
                            <h6>{props?.property?.title}</h6>
                        </Card.Title>

                        <div className="row">
                            <div className="col-4">
                                {props?.property?.details?.noOfRooms} <b>Rooms</b>
                            </div>
                            <div className="col-4">
                                {props?.property?.area} <b>Sq.ft</b>
                            </div>
                            <div className="col-4">
                                3 <b>bed</b>
                            </div>
                            <div className="col-12">
                                {/*<i>Address</i>*/}
                            </div>
                        </div>


                        {/*</Card.Text>*/}
                        {/*<Card.Title>{props.product.price}</Card.Title>*/}
                        <Card.Text>
                            {/*Some quick example text to build on the card title and make up the*/}
                            {/*bulk of the card's content.*/}
                        </Card.Text>
                        <div className="row">

                            {/*<div className="col-4">*/}
                            {/*    <Button title={"Share Item"} className="btn btn-primary"><Share></Share></Button>*/}
                            {/*</div>*/}
                            <div className="col-6">
                                {props?.property?.status!=="CONTINGENT"?<Button onClick={makeOffer} title={"Make and Offer"} className="btn text-white float-start btn-primary"><CurrencyDollar></CurrencyDollar>Make An Offer</Button>:null}

                            </div>
                            <div className="col-6">
                                <Button onClick={contactOwner} title={"Contact the Owner"} className="btn text-white float-end btn-success"><Envelope></Envelope> Contact</Button>

                            </div>
                        </div>
                    </Card.Body>
                </Card>


        </div>
    );
}

export default SingleProperty;
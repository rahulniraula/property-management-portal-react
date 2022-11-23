import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import {HeartFill,Share,Envelope} from 'react-bootstrap-icons';
import {Link} from "react-router-dom";
function SingleProperty(props) {
    return (
        <div className="col-4 mt-4">
            <Link to="/property-details/1">
                <Card >
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
                                <Button title={"Add To Favourite List"} className="btn btn-danger"><HeartFill></HeartFill></Button>
                            </div>
                            {/*<div className="col-4">*/}
                            {/*    <Button title={"Share Item"} className="btn btn-primary"><Share></Share></Button>*/}
                            {/*</div>*/}
                            <div className="col-6">
                                <Button title={"Contact the Owner"} className="btn float-end btn-success"><Envelope></Envelope></Button>

                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
}

export default SingleProperty;
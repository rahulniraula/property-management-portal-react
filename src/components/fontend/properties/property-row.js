import SingleProperty from "./single-property";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardHeader from "react-bootstrap/CardHeader";
const PropertyRow=(props)=>{
    return (
        <div className="row mt-3">
            <div className="col-12">
                <Card>
                    <CardHeader className={"bg-primary"}>
                        <div className="row">
                            <div className="col-9 text-white"><Card.Title>{props.title}</Card.Title></div>
                            <div className="col-3"><input placeholder={"Search"} className={"form-control"}/></div>
                        </div>
                    </CardHeader>
                    <Card.Body>

                        <div className="row">
                            {props.properties.map(property=><SingleProperty key={property.id} property={property}></SingleProperty>)}
                        </div>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
}
export default PropertyRow;
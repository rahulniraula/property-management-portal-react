import {House} from "react-bootstrap-icons";

const PropertyDetailsIcons=()=>{
    return (
        <div className="col-4">
            <div className="row">
                <div className="col-4"><House className={"fa fa-2x"}></House></div>
                <div className="col-8">
                    <h6>Property Type</h6>
                    <p style={{fontSize:"12px"}} className={"text-muted"}>Property Type</p>
                </div>
            </div>
        </div>
    );
}
export default PropertyDetailsIcons;
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Action=(props)=>{
    const [show,setShow]=useState(false);
    const navigate=useNavigate();
    function getClass(){
        if(show){
            return "dropdown-menu show";
        }else{
            return "dropdown-menu";
        }
    }
    function deleteProperty(event){
        event.preventDefault();
    }
    function editProperty(event){
        event.preventDefault();
    }
    function showOffers(event){
        event.preventDefault();
        navigate("/admin/properties/"+props.property.id+"/offers",{state:props?.property})
    }
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item dropdown show">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown"
                   role="button" aria-haspopup="true" aria-expanded="false" onClick={()=>setShow(!show)}>Action</a>
                <div className={getClass()} onClick={()=>setShow(false)}>
                    {/*{props?.property?.actions?.map(a=><a className="dropdown-item" href="#">{a}</a>)}*/}
                    {props.property.actions.indexOf("Delete Property")!==-1?<a className="dropdown-item" href={""} onClick={deleteProperty}>Delete Property</a>:null}
                    {props.property.actions.indexOf("Edit Property")!==-1?<a className="dropdown-item" href={""} onClick={editProperty}>Edit Property</a>:null}
                    {props.property.actions.indexOf("Show Offers")!==-1?<a className="dropdown-item" href={""} onClick={showOffers}>Show Offers</a>:null}

                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Separated link</a>
                </div>
            </li>

        </ul>
    );
}
export default Action;
import {useState} from "react";

const Action=(props)=>{
    const [show,setShow]=useState(false);
    function getClass(){
        if(show){
            return "dropdown-menu show";
        }else{
            return "dropdown-menu";
        }
    }
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item dropdown show">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown"
                   role="button" aria-haspopup="true" aria-expanded="false" onClick={()=>setShow(!show)}>Action</a>
                <div className={getClass()} onClick={()=>setShow(false)}>

                    {props.offer.actions.indexOf("Accept Offer")!==-1?<a className="dropdown-item" href="#" onClick={props.acceptOffer}>Accept Offer</a>:null}
                    {props.offer.actions.indexOf("Reject Offer")!==-1?<a className="dropdown-item" href="#" onClick={props.rejectOffer}> Reject Offer</a>:null}
                    {}
                    <div className="dropdown-divider"></div>
                </div>
            </li>

        </ul>
    );
}
export default Action;
import {useState} from "react";

const Action=()=>{
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
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"
                   role="button" aria-haspopup="true" aria-expanded="false" onClick={()=>setShow(!show)}>Action</a>
                <div className={getClass()} onClick={()=>setShow(false)}>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Separated link</a>
                </div>
            </li>

        </ul>
    );
}
export default Action;
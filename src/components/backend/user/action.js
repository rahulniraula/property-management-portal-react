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
                    {props.user.actions.indexOf("INACTIVE")!==-1?<a className="dropdown-item" href={""} onClick={(event)=>props.changeUserStatus(event,"INACTIVE",props.user)}>Deactivate User</a>:null}
                    {props.user.actions.indexOf("ACTIVE")!==-1?<a className="dropdown-item" href={""} onClick={(event)=>props.changeUserStatus(event,"ACTIVE",props.user)}>Activate User</a>:null}
                    {props.user.actions.indexOf("Reset Password")!==-1?<a className="dropdown-item" href="" onClick={props.resetPassword}>Reset Password</a>:null}
                    {props.user.actions.indexOf("Edit User")!==-1?<a className="dropdown-item" href="#" onClick={props.editUser}>Edit User</a>:null}
                    {props.user.actions.indexOf("Delete User")!==-1?<a className="dropdown-item" href="#" onClick={props.deleteUser}> Delete User</a>:null}
                    {}
                    <div className="dropdown-divider"></div>
                </div>
            </li>

        </ul>
    );
}
export default Action;
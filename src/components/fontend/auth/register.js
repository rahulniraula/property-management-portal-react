import {useRef, useState} from "react";
import AuthService from "../../../service/auth-service";
import {Link, useNavigate} from "react-router-dom";
import {catchErrorsFromResponse, hasAdministrativePrevilege} from "../../../util/util";
import Errors from "../shared/errors";

const Register=()=>{
    let registerForm=useRef();
    const navigate=useNavigate();
    const [errors,setErrors]=useState([]);
    function successCallback(data){
        navigate("/login");
    }
    function errorCallback(e){
        setErrors(catchErrorsFromResponse(e));

    }
    function doRegister(){
        let firstName=registerForm.current.firstName.value;
        let lastName=registerForm.current.lastName.value;
        let email=registerForm.current.email.value;
        let phoneNumber=registerForm.current.phoneNumber.value;
        let password=registerForm.current.password.value;
        let confirmPassword=registerForm.current.confirmPassword.value;
        let role=registerForm.current.role.value;
        AuthService.register({firstName,lastName,email,phoneNumber,password,confirmPassword,role,successCallback,errorCallback});
    }
    return (
        <div className="row loginRow">
            <div className="offset-4 col-4 loginBlock">
                <h3 className="text-center">Registration</h3>
                <Errors errors={errors}></Errors>
                <form ref={registerForm}>
                    <div className="form-outline">
                        <label className="form-label">First Name</label>
                        <input type="text" name="firstName"  className="form-control"/>
                    </div>

                    <div className="form-outline">
                        <label className="form-label">Last Name</label>
                        <input type="text" name="lastName"  className="form-control"/>
                    </div>
                    <div className="form-outline">
                        <label className="form-label">Email address</label>
                        <input type="email" name="email"  className="form-control"/>
                    </div>
                    <div className="form-outline">
                        <label className="form-label">Phone Number</label>
                        <input type="text" name="phoneNumber"  className="form-control"/>
                    </div>

                    <div className="form-outline">
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                        <input type="password" name={"password"} id="form2Example2" className="form-control"/>
                    </div>
                    <div className="form-outline">
                        <label className="form-label" htmlFor="form2Example2">Confirm Password</label>
                        <input type="password" name={"confirmPassword"} id="form2Example2" className="form-control"/>
                    </div>
                    <div className="form-outline">
                        <label className="form-label" htmlFor="form2Example2">Preferred Role</label>
                        <select name={"role"} className={"form-control"}>
                            <option value="OWNER">Owner</option>
                            <option value="CUSTOMER">Customer</option>
                        </select>
                    </div>
                    <button type="button" className="btn btn-primary btn-block mt-4" onClick={doRegister}>Register</button>

                    <div className="text-center">
                        <p>Already a member? <Link to="/login">Sign In</Link></p>

                    </div>
                </form>
            </div>r
        </div>
    );
}
export default Register;
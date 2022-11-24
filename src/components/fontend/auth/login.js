import {useRef, useState} from "react";
import AuthService from "../../../service/auth-service";
import {useNavigate} from "react-router-dom";
import {catchErrorsFromResponse, hasAdministrativePrevilege} from "../../../util/util";
import Errors from "../shared/errors";

const Login=()=>{
    const signInForm=useRef();
    const navigate=useNavigate();
    const [errors,setErrors]=useState([]);
    function successCallback(data){
        localStorage.setItem("USER_DATA",JSON.stringify(data));
        if(hasAdministrativePrevilege()){
            navigate("/admin")
        }else{
            navigate("/");
        }
    }
    function errorCallback(e){
        setErrors(catchErrorsFromResponse(e));

    }
    function doSignIn(){
        let email=signInForm.current.email.value;
        let password=signInForm.current.password.value;
        AuthService.login({email,password,successCallback,errorCallback});
    }
    return (
        <div className="row loginRow">
            <div className="offset-4 col-4 loginBlock">
                <h3 className="text-center">Login</h3>
                <Errors errors={errors}></Errors>
                <form ref={signInForm}>
                    <div className="form-outline mb-4">
                        <label className="form-label">Email address</label>
                        <input type="email" name="email"  className="form-control"/>

                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                        <input type="password" name={"password"} id="form2Example2" className="form-control"/>

                    </div>

                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                                <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                            </div>
                        </div>

                        <div className="col">
                            <a href="src/components/fontend/auth/login#!">Forgot password?</a>
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary btn-block mb-4" onClick={doSignIn}>Sign in</button>

                    <div className="text-center">
                        <p>Not a member? <a href="src/components/fontend/auth/login#!">Register</a></p>
                        <p>or sign up with:</p>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-google"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-twitter"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-github"></i>
                        </button>
                    </div>
                </form>
            </div>r
        </div>
    );
}
export default Login;
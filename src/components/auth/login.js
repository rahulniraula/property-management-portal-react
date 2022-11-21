const Login=()=>{
    return (
        <div className="row loginRow">
            <div className="offset-4 col-4 loginBlock">
                <h3 className="text-center">Login</h3>
                <form>
                    <div className="form-outline mb-4">
                        <label className="form-label">Email address</label>
                        <input type="email"  className="form-control"/>

                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                        <input type="password" id="form2Example2" className="form-control"/>

                    </div>

                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                                <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                            </div>
                        </div>

                        <div className="col">
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

                    <div className="text-center">
                        <p>Not a member? <a href="#!">Register</a></p>
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
import {Link, useNavigate} from "react-router-dom";
import {logout as lo} from "../../../util/util";

const Header=()=>{
    const navigate=useNavigate()
    function logout(){
        lo();
        navigate("/");

    }
    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/admin" className="logo d-flex align-items-center">
                        <img src="assets/img/logo.png" alt=""/>
                        <span className="d-none d-lg-block">Property Management</span>
                    </Link>
                    <i className="bi bi-list toggle-sidebar-btn"></i>
                </div>



                <nav className="header-nav ms-auto">
                    <button className={"btn btn-danger"} onClick={logout}>Logout</button>
                </nav>

            </header>
        </>
    )
}
export default Header;
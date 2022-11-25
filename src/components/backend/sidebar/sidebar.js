import {Link} from "react-router-dom";
import {userHasRole} from "../../../util/util";

const Sidebar=()=>{
    return (
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <Link className="nav-link " to="/admin">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={"/admin/properties"} className="nav-link collapsed">
                        <i className="bi bi-person"></i>
                        <span>Properties</span>
                    </Link>
                    {userHasRole("ADMIN")?<Link to={"/admin/users"} className="nav-link collapsed">
                        <i className="bi bi-person"></i>
                        <span>Users</span>
                    </Link>:null}
                </li>



            </ul>

        </aside>
    );
}
export default Sidebar;
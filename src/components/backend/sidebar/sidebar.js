import {Link} from "react-router-dom";

const Sidebar=()=>{
    return (
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <a className="nav-link " href="index.html">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li className="nav-item">
                    <Link to={"/admin/properties"} className="nav-link collapsed">
                        <i className="bi bi-person"></i>
                        <span>Properties</span>
                    </Link>
                    <Link to={"/admin/users"} className="nav-link collapsed">
                        <i className="bi bi-person"></i>
                        <span>Users</span>
                    </Link>
                </li>



            </ul>

        </aside>
    );
}
export default Sidebar;
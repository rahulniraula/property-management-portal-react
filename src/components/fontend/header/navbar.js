import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {siteConfig} from "../../../config/config";
import {Link, Outlet, useNavigate} from "react-router-dom";
import extractUserFromToken, {isLoggedIn, logout} from "../../../util/util";

function NavBar() {
    const navigate=useNavigate();
    return (
        <>
            <Navbar bg="primary" expand="lg" className={"text-white"}>
                <Container fluid>
                    <Navbar.Brand style={{cursor:"pointer",color:"white"}} href="" onClick={()=>{navigate("/")}}>{siteConfig.appName}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 text-white"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/property-type/DUPLEX" className={" text-white m-3"}>DUPLEX</Link>
                            <Link to="/property-type/SINGLE" className={" text-white m-3"}>SINGLE</Link>
                            <Link to="/property-type/CONDO" className={" text-white m-3"}>CONDO</Link>




                        </Nav>
                        {
                            isLoggedIn()?<NavDropdown drop="start" title={extractUserFromToken()?.email} >
                                <NavDropdown.Item  onClick={()=>{logout();navigate("/admin/profile")}}>Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action4">
                                    As
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={()=>{logout();navigate("/")}}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>:(
                                //     <Nav.Link onClick={()=>{navigate("/login")}}>
                                //     Login
                                // </Nav.Link>
                                <>
                                    <button className={"btn btn-success"} onClick={()=>{navigate("/login")}}>Sign In</button>
                                    <button className={"btn btn-danger mx-5"}  onClick={()=>{navigate("/register")}}>Register</button>

                                </>

                            )
                        }

                        <Nav>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet></Outlet>
        </>
    );
}

export default NavBar;
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {siteConfig} from "../../config/config";
import {Link, useNavigate} from "react-router-dom";
import {isLoggedIn} from "../../util/util";

function NavBar() {
    const navigate=useNavigate();
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand style={{cursor:"pointer"}} href="" onClick={()=>{navigate("/")}}>{siteConfig.appName}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Buy</Nav.Link>
                        <Nav.Link href="#action2">Rent</Nav.Link>
                        <Nav.Link href="#action2">Sell</Nav.Link>


                    </Nav>
                    {
                        isLoggedIn()?<NavDropdown drop="start" title="Niraula" >
                            <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action4">
                                As
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>:<Nav.Link onClick={()=>{navigate("/login")}}>
                            Login
                        </Nav.Link>
                    }

                    <Nav>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
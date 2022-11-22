import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/header/navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/auth/login";
import Home from "./components/homepage/home";
import "./config/axios-interceptor";

function App() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <div className="">
                    <NavBar></NavBar>
                </div>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;

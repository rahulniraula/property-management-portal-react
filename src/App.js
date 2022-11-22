import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/header/navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/auth/login";
import Home from "./components/homepage/home";
import "./config/axios-interceptor";
import MyRoutes from "./routes/routes";

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <div className="">
                    <NavBar></NavBar>
                </div>
                <MyRoutes></MyRoutes>
            </BrowserRouter>

        </div>
    );
}

export default App;

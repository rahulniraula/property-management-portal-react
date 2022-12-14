import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/fontend/header/navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/fontend/auth/login";
import Home from "./components/fontend/homepage/home";
import "./config/axios-interceptor";
import MyRoutes from "./routes/routes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="container">
            <ToastContainer />
            <BrowserRouter>
                <div className="">
                    {/*<NavBar></NavBar>*/}
                </div>
                <MyRoutes></MyRoutes>
            </BrowserRouter>

        </div>
    );
}

export default App;

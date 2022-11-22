import {Route, Routes} from "react-router-dom";
import Home from "../components/homepage/home";
import Login from "../components/auth/login";

const MyRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
    );
}
export default MyRoutes;
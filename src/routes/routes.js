import {Route, Routes} from "react-router-dom";
import Home from "../components/homepage/home";
import Login from "../components/auth/login";
import PropertyDetails from "../components/property-details/property-details";
import SinglePropertyDetails from "../components/property-details/single-property-details";
import Register from "../components/auth/register";

const MyRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/property-details" element={<PropertyDetails></PropertyDetails>}>
                <Route path=":id" element={<SinglePropertyDetails></SinglePropertyDetails>}></Route>
            </Route>
        </Routes>
    );
}
export default MyRoutes;
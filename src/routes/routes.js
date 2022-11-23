import {Route, Routes} from "react-router-dom";
import Home from "../components/fontend/homepage/home";
import Login from "../components/fontend/auth/login";
import PropertyDetails from "../components/fontend/property-details/property-details";
import SinglePropertyDetails from "../components/fontend/property-details/single-property-details";
import Register from "../components/fontend/auth/register";
import SearchResult from "../components/fontend/search/search-result";
import NavBar from "../components/fontend/header/navbar";
import AdminWrapper from "../components/backend/admin-wrapper";
import CreateProperties from "../components/backend/properties/create-properties";
import ListProperties from "../components/backend/properties/list-properties";

const MyRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<NavBar></NavBar>}>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/register" element={<Register></Register>}></Route>
                    <Route path="/search" element={<SearchResult></SearchResult>}></Route>
                    <Route path="/property-details" element={<PropertyDetails></PropertyDetails>}>
                        <Route path=":id" element={<SinglePropertyDetails></SinglePropertyDetails>}></Route>
                    </Route>
                </Route>
                <Route path={"/admin"} element={<AdminWrapper></AdminWrapper>}>
                    <Route path={"properties"} element={<ListProperties></ListProperties>}></Route>
                    <Route path={"properties/create"} element={<CreateProperties></CreateProperties>}></Route>
                </Route>

            </Routes>
        </>
    );
}
export default MyRoutes;
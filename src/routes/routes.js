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
import ListUser from "../components/backend/user/list-user";
import OfferList from "../components/backend/offer/OfferList";
import Profile from "../components/backend/profile/profile";
import CategoryWrapper from "../components/fontend/properties/category/category-wrapper";
import Category from "../components/fontend/properties/category/category";

const MyRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<NavBar></NavBar>}>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/register" element={<Register></Register>}></Route>
                    <Route path="/search" element={<SearchResult></SearchResult>}></Route>
                    <Route path="/property-type" element={<CategoryWrapper></CategoryWrapper>}>
                        <Route path=":type" element={<Category></Category>}></Route>
                    </Route>
                    <Route path="/property-details" element={<PropertyDetails></PropertyDetails>}>
                        <Route path=":id" element={<SinglePropertyDetails></SinglePropertyDetails>}></Route>
                    </Route>
                </Route>
                <Route path={"/admin"} element={<AdminWrapper></AdminWrapper>}>
                    <Route path={"properties"} element={<ListProperties></ListProperties>}>
                        <Route path={":id/offers"} element={<OfferList></OfferList>}></Route>
                    </Route>

                    <Route path={"properties/create"} element={<CreateProperties></CreateProperties>}></Route>
                    <Route path={"users"} element={<ListUser></ListUser>}></Route>
                    <Route path={"profile"} element={<Profile></Profile>}></Route>
                    {/*<Route path={"users/create"} element={<Crea></Crea>}></Route>*/}
                </Route>

            </Routes>
        </>
    );
}
export default MyRoutes;
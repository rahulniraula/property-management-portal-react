import HomepageSliderWrapper from "./homepage-slider-wrapper";
import PropertyRow from "../properties/property-row";
const Home=()=>{
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <HomepageSliderWrapper></HomepageSliderWrapper>
                </div>

            </div>
            <div className="row">
                <div className="col-12">
                    <PropertyRow title={"Title" } axios={{url:'/public/properties/'}}></PropertyRow>
                </div>
            </div>
        </>
    );
}
export default Home;
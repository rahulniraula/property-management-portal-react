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
                    <PropertyRow title={"Title" } properties={[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]}></PropertyRow>
                </div>
            </div>
        </>
    );
}
export default Home;
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
                    <PropertyRow title={"Duplex" } axios={{url:'/public/properties/',params:{propertyType:'DUPLEX'}}}></PropertyRow>
                    <PropertyRow title={"Condo" } axios={{url:'/public/properties/',params:{propertyType:'CONDO'}}}></PropertyRow>
                    <PropertyRow title={"Single" } axios={{url:'/public/properties/',params:{propertyType:'SINGLE'}}}></PropertyRow>
                </div>
            </div>
        </>
    );
}
export default Home;
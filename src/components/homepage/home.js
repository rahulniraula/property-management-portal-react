import HomepageSliderWrapper from "./homepage-slider-wrapper";
import ProductsRow from "../products/products-row";



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
                    <ProductsRow title={"Title" } products={[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]}></ProductsRow>
                </div>
            </div>
        </>
    );
}
export default Home;
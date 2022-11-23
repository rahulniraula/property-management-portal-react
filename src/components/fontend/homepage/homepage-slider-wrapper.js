import HomePageSlider from "./homepage-slider";
import SearchWidget from "./search-widget";

const HomepageSliderWrapper=()=>{
    return (
        <div className="wrapper">
            <HomePageSlider></HomePageSlider>
            <SearchWidget></SearchWidget>
        </div>
    );
}
export default HomepageSliderWrapper;
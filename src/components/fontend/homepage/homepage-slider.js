import Carousel from 'react-bootstrap/Carousel';

function HomePageSlider() {
    return (
        <Carousel>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="http://localhost:8080/images/slider2.jpeg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Property Search Begins Here</h3>
                    <p>Search for your sweet home.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default HomePageSlider;
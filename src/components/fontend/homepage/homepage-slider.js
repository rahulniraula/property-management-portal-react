import Carousel from 'react-bootstrap/Carousel';

function HomePageSlider() {
    return (
        <Carousel>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/2600/800"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default HomePageSlider;
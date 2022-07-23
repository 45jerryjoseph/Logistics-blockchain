import Carousel from "react-bootstrap/Carousel";
import image1 from '../../images/404-page-large.png'
import image2 from '../../images/628.jpg'
import image3 from '../../images/927.jpg'

function HeroCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block h-10 w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Accessible High Quality Healthcare</h3>
          <p>We value our customers by serving them with ethusiasim</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block h-10 w-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Distribution</h3>
          <p>We support better health care service delivery by guaranting uninterupted medical supply</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-10 w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Improving HealthCare</h3>
          <p>
            We provide the required health care products at the right time and the right quantities
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;

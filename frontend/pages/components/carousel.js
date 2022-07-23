import Carousel from "react-bootstrap/Carousel";

function HeroCarousel() {
    const styles = {
      image: { height: "26rem", objectFit: "cover" },
    };
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block h-5 w-100"
          src="https://cdn.pixabay.com/photo/2016/02/07/16/35/world-1185076_960_720.png"
          alt="First slide"
          style={styles.image}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block h-10 w-100"
          src="https://citizentv.s3.amazonaws.com/4848/conversions/KEMSA-og_image.jpg"
          alt="Second slide"
          style={styles.image}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-10 w-100"
          src="https://www.kemsa.co.ke/wp-content/uploads/2015/09/about.jpg"
          alt="Third slide"
          style={styles.image}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;

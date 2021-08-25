import Carousel from "react-bootstrap/Carousel"
import '../css/Carousel.css';
const Banner = () => {


//console.log(carrito.length);
    return (
        <>
   <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100 banner"
      src="/images/banner.gif"
      alt="First slide"
    />
    <Carousel.Caption>
      <div className="titular">
      <h1 className="titulobanner">SNEAKEREST</h1>
      <p className="sub-title">¡Lo mejor del calzado a un solo click!</p>
      </div>
     
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
        </>
    );
};

export default Banner;

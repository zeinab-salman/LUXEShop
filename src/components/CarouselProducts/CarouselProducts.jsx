
import Carousel from 'react-bootstrap/Carousel';
import "./CarouselProducts.css"
import img1 from "../../../public/images/d1.jpg"
import img2 from "../../../public/images/d2.jpg"
import img3 from "../../../public/images/d3.jpg"
import img4 from "../../../public/images/d4.jpg"
import img5 from "../../../public/images/d5.jpg"
function CarouselProducts() {
  return (
    <Carousel className='carouselPro'>
      <Carousel.Item interval={3000}>
       <img src={img1}/>
        <Carousel.Caption>
        
          <p className='caption'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>


        
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2}/>
        <Carousel.Caption>
        
          <p className='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src={img3}/>
        <Carousel.Caption>
         
          <p className='caption'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item>
         <img src={img4}/>
        <Carousel.Caption>
         
          <p className='caption'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item>
         <img src={img5}/>
        <Carousel.Caption>
         
          <p className='caption'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item>
         <img src={img3}/>
        <Carousel.Caption>
         
          <p className='caption'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselProducts;
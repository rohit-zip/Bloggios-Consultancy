import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import '../Styles/Testimonals.css';


export default class Testimonials extends Component {
  render() {
    return (
      
      
      
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        
      >
        
        <div><h3><i>SEE WHAT OUR CLIENT SAY ABOUT US</i></h3>
          <img src="shutterstock_653970169.jpg" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Client</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div><h3><i>SEE WHAT OUR CLIENT SAY ABOUT US</i></h3>
          <img src="images.jpeg" />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Client</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div><h3><i>SEE WHAT OUR CLIENT SAY ABOUT US</i></h3>
        <img src="images.jpeg" />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Client</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>

        
      </Carousel>
    );
  }
}
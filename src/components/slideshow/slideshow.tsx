import * as React from "react";
import { Fade } from "react-slideshow-image";
const vinyls = require("./../../assets/img/vinyls.jpeg");
const casettes = require("./../../assets/img/casettes.jpeg");

interface ComponentProps {
}

export class SlideShow extends React.Component<ComponentProps> {
  render() {
     const fadeImages = [
        vinyls,
        casettes
      ];

    const fadeProperties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: false,
      indicators: true
    };
    return (
    <div className="slideshow">
        <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img width="100%" src={fadeImages[0]} />
        </div>
        <h2>First Slide</h2>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img width="100%" src={fadeImages[1]} />
        </div>
        <h2>Second Slide</h2>
      </div>
      {/* <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[2]} />
        </div>
        <h2>Third Slide</h2>
      </div> */}
    </Fade>
    </div>
    );
  }
}

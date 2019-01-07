import * as React from "react";

const vinyls = require("./../../assets/img/vinyls.jpeg");
const casettes = require("./../../assets/img/casettes.jpeg");
import { SlideShow } from "../slideshow/slideshow";

interface ComponentProps {
  english: string;
  changeLanguage: () => {};
}

export class Content extends React.Component<ComponentProps> {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }
  state = {
      currentImage: vinyls
    };

  onClick() {
    this.props.changeLanguage();
    console.log(this.state.currentImage);
    if (this.state.currentImage === vinyls) {
      this.setState({ currentImage: casettes });
    } else {
      this.setState({ currentImage: vinyls });
    }
  }

  render() {
    const { english } = this.props;
    const { currentImage } = this.state;
    console.log(currentImage);
    return (
      <div className="content">
        {/* <img width="100%" src={currentImage} />
        <button onClick={this.onClick}>switch image</button>

        <p>{english}</p> */}
        <SlideShow/>
        <p>
          Check out these amazing new technologies! The future is looking
          bright! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          ante lorem, interdum a pulvinar in, ultrices mattis augue. Nam maximus
          enim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
      </div>
    );
  }
}

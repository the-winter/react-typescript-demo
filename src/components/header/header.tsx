import * as React from "react";

const headerImage = require("../../assets/img/Crveni-boz.jpg");

interface HeaderProps {}

export class Header extends React.Component<HeaderProps> {
  constructor(props) {
    super(props);
    this.state = {
      english: "Serbian Choir Red Peonies",
      serbian: "Српски Хор Црвени Божури"
    };
  }
  render() {
    const { english, serbian } = this.state;
    return (
      <div className="header">
        <div>
          <img src={headerImage} width="700px" />
        </div>
        <div>
          <h1>{serbian}</h1>
          <h1>{english}</h1>
        </div>
      </div>
    );
  }
}

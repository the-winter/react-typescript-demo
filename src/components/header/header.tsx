import * as React from "react";

const headerImage = require("../../assets/img/Crveni-boz.jpg");

interface HeaderProps {}

export class Header extends React.Component<HeaderProps> {
  constructor(props) {
    super(props);
    this.state = {
      title: "Legendary Title"
    };
  }
  render() {
    const { title } = this.state;
    return (
      <div className="header">
        <div className="header-title">
          <h1>{title}</h1>
        </div>
        <div className="nav">
          <div>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    );
  }
}

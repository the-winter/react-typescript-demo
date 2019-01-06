import * as React from "react";

const vinyls = require("./../../assets/img/vinyls.jpeg");

interface ComponentProps {
  english: string;
  serbian: string;
  changeLanguage: () => {};
}

export class Content extends React.Component<ComponentProps> {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.changeLanguage();
  }

  render() {
    const { english, serbian } = this.props;
    return (
      <div className="content">
        <img width="100%" src={vinyls} />
        <button onClick={this.onClick}>switch caption</button>
        <p>Welcome</p>
        <p>{english}</p>
      </div>
    );
  }
}

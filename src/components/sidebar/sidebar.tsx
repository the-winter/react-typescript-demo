import * as React from "react";

export class Sidebar extends React.Component<undefined> {
  constructor(props) {
    super(props);
    this.state = {
      showPerformances: true
    };
  }

  show() {
    console.log("performances");
  }

  render() {
    const eventList = ["one", "two", "three"];
    const events = eventList.map(event => <li>{event}</li>);
    return (
      <div className="sidebar">
        <h3>Upcoming Performances</h3>
        <button onClick={this.show}>Show</button>
        <div>{events}</div>
      </div>
    );
  }
}

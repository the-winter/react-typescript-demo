import React from "react";
import { Fade } from "react-slideshow-image";

export class SlideShow extends React.Component<undefined> {
  render() {
    return (
      <div className="sidebar">
        <h3>Upcoming Performances</h3>
        <div>{events}</div>
      </div>
    );
  }
}

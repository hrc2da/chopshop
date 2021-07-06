import React, { Component } from "react";

class BodyPNG extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <g>
          {" "}
          <image
            height={this.props.h}
            width={this.props.w}
            draggable="false"
            preserveAspectRatio="none"
            xlinkHref={this.props.img}
          />{" "}
        </g>
      </React.Fragment>
    );
  }
}

export default BodyPNG;

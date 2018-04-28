import React, { Component } from 'react';

class Block extends Component{

  state = {
    x: this.props.x,
    y: this.props.y,
    img: this.props.img,
    x_i: this.props.x,
    y_i: this.props.y,
    h: 60,
    w: 60,
    fill: "yellow"
  };

  handleMouseDown = (e) => {
    this.coords = {
      x: e.pageX,
      y: e.pageY
    }
    document.addEventListener('mousemove', this.handleMouseMove);
  };
  
  handleMouseUp = () => {
    document.removeEventListener('mousemove', this.handleMouseMove);
    this.coords = {};
    this.setState({
	x: this.state.x_i,
	y: this.state.y_i
    });
  };
  
  handleMouseMove = (e) => {
    const xDiff = this.coords.x - e.pageX;
    const yDiff = this.coords.y - e.pageY;

    this.coords.x = e.pageX;
    this.coords.y = e.pageY;

    this.setState({
      x: this.state.x - xDiff,
      y: this.state.y - yDiff
    });
  };

  render() {
    const { x, y, h, w, fill } = this.state;
    return (
    <React.Fragment>
     <rect
        height={h}
	width={w}
        x={x}
        y={y}
	fill={fill}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      />
     <image
	height={h}
	width={w}
	x={x}
	y={y}
	onMouseDown={this.handleMouseDown}
	onMouseUp={this.handleMouseUp}
	preserveAspectRatio="none"
	xlinkHref="/carIcons/16wheel.png"
     />
    </React.Fragment>
    )
  }
}


export default Block;

import React, { Component } from 'react';

class Block extends Component{
  state = {
    x: this.props.x,
    y: this.props.y,
    img: this.props.img,
    x_i: this.props.x,
    y_i: this.props.y,
    h: this.props.size,
    w: this.props.size,
    name: this.props.name,
    value: this.props.value,
    type: this.props.type,
    fill: "yellow"
  };

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  handleMouseDown = (e) => {
    this.coords = {
      x: e.pageX,
      y: e.pageY
    }
    console.log("stringgggg", e.target.parentNode.parentNode)
    e.target.parentNode.parentNode.appendChild(e.target.parentNode);
    document.addEventListener('mousemove', this.handleMouseMove);
  };
  
  handleMouseUp = (e) => {
    console.log('event: ', e.target);
    document.removeEventListener('mousemove', this.handleMouseMove);
    if (this.isInPit()) {
      this.props.handleDrop(e);
    }
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

    this.handleOutOfBounds(e);

  };


  isInPit = () => {
    if (this.state.y < this.props.y_max/2)
      return true;
    return false;
  }

  handleOutOfBounds = (e) => {
    //rightBound
    if (this.state.x + this.state.w > this.props.x_max) {
      this.handleMouseUp(e);
    }

    //leftBound
    if (this.state.x < 0) {
      this.handleMouseUp(e);
    }

    //upBound
    if (this.state.y < 0) {
      this.handleMouseUp(e);
    }

    //downBound
    if (this.state.y + this.state.h > this.props.y_max) {
      this.handleMouseUp(e);
    }
  }



  render() {
    const { x, y, h, w, fill } = this.state;
    return (
      <React.Fragment>
      <g> <image
      height={h}
      width={w}
      x={x}
      y={y}
      draggable='false'
      onMouseDown={this.handleMouseDown}
      onMouseUp={this.handleMouseUp}
      preserveAspectRatio="none"
      xlinkHref={this.state.img}
      type={this.state.type}
      value={this.state.value}
      /> </g>
      </React.Fragment>
      )
  }
}


export default Block;

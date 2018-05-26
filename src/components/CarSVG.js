import React, { Component } from 'react';
import { clockwiseSort } from '../util/polygons'
class CarSVG extends Component{

  constructor(props) {
    super(props);
    //car attributes:
    //hull_densities: [f,f,f,f]
    //hull_poly1: [[d,d],[d,d],[d,d],[d,d]]
    //(4 hull_polyX's)
    //drive_train: [bool,bool,bool,bool]
    //eng_power: int
    //friction_lim: f
    //wheel_pos: [[d,d],[d,d],[d,d],[d,d]]
    //wheel_rad: int
    //wheel_width: int
    //(d == int, sorry)
  }

  wheelattrs2Coords(wheel_r, wheel_w, wheel_pos){
    return [[wheel_pos[0]-wheel_w/2, wheel_pos[1]+wheel_r],[wheel_pos[0]+wheel_w/2, wheel_pos[1]+wheel_r],
      [wheel_pos[0]-wheel_w/2, wheel_pos[1]-wheel_r],[wheel_pos[0]+wheel_w/2, wheel_pos[1]-wheel_r]]
  }
  coords2SVG(coords,fill,density=2.0,scale=0.5,xOffset=250,yOffset=250){
    console.log("DENSITy",density)
    let offsetCoords = coords.map(x=>[parseInt(scale*(x[0])+xOffset), parseInt(scale*(-x[1])+yOffset)]);
    let sortedCoords = clockwiseSort(offsetCoords);//[offsetCoords[0],offsetCoords[1], offsetCoords[3], offsetCoords[2]];//.sort((a,b)=>a[0]-b[0])
    //let pathStr = "M 10 10 ";
    //console.log("BEFORE",offsetCoords);
    //let temp = sortedCoords[1];
    //sortedCoords[1] = sortedCoords[2];
    //sortedCoords[2] = temp;
    //console.log("AFTER",sortedCoords);
    let pathStr = "M "+sortedCoords[0][0]+" "+sortedCoords[0][1];
    for (let c=1; c<sortedCoords.length; c++){
      pathStr += " L "+sortedCoords[c][0]+" "+sortedCoords[c][1];
    }
    //close the path
    pathStr += " L "+sortedCoords[0][0]+" "+sortedCoords[0][1];
    console.log(pathStr);
    return <path d={pathStr} fill={fill} fillOpacity={parseInt(density)/2.0}/>
  }
  render() {
    let bumper = this.props.config ? this.props.config.hull_poly1 : undefined;
    let hull1 = this.props.config ? this.props.config.hull_poly2 : undefined;
    let hull2 = this.props.config ? this.props.config.hull_poly3 : undefined;
    let spoiler = this.props.config ? this.props.config.hull_poly4 : undefined;
    let wheels = this.props.config ? this.props.config.wheel_pos : undefined;
    let wheel_coords = wheels ? wheels.map(w => this.wheelattrs2Coords(this.props.config.wheel_rad, this.props.config.wheel_width, w)) : [];
    return (
      <React.Fragment>
        <svg height={500} width={500}>
        {bumper && this.coords2SVG(bumper,"red",this.props.config.hull_densities[0])}
        {hull1 && this.coords2SVG(hull1,"red",this.props.config.hull_densities[1])}
        {hull2 && this.coords2SVG(hull2,"red",this.props.config.hull_densities[2])}
        {spoiler && this.coords2SVG(spoiler,"red",this.props.config.hull_densities[3])}
        {wheel_coords.map(w=>this.coords2SVG(w,"black")) }
        </svg>
      </React.Fragment>
      )
  }
}


export default CarSVG;

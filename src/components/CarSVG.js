import React, { Component } from 'react';
import { clockwiseSort } from '../util/polygons'
export const transform = (coords,xOffset,yOffset,scale=1.0,rotation=90)=>{
  //for now, just rotate 90 degrees, but should make this 
  //return
  //coords.map(v=>[parseInt(scale*(Math.cos(theta)*v[0]-Math.sin(theta)*v[1]))+xOffset,
  //              parseInt(scale*(Math.sin(theta)*v[0]+Math.cos(theta)*v[1]))+yOffset])
  console.log('GOT COORDS',coords);
  return coords.map(v=>[parseInt(scale*(v[0])+xOffset), parseInt(scale*(v[1])+yOffset)])
}

export const invtransform = (coords,xOffset,yOffset,scale=2.0,rotation=90)=>{
  return coords.map(v=>[parseInt((v[0]-xOffset)*(1.0/scale)),parseInt((v[1]-yOffset)*(1.0/scale))])
}
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
  coords2SVG(coords,fill,density=2.0,xOffset=275,yOffset=200,scale=2.0){
    //console.log("DENSITy",density)
    let offsetCoords = transform(coords,xOffset,yOffset,scale)//coords.map(x=>[parseInt(scale*(x[1])+xOffset), parseInt(scale*(x[0])+yOffset)]);
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
    //console.log(pathStr);
    return <path d={pathStr} fill={fill} fillOpacity={parseFloat(density)/1.0}/>
  }
  render() {
    let bumper = this.props.config ? this.props.config.hull_poly1 : undefined;
    let hull1 = this.props.config ? this.props.config.hull_poly2 : undefined;
    let hull2 = this.props.config ? this.props.config.hull_poly3 : undefined;
    let spoiler = this.props.config ? this.props.config.hull_poly4 : undefined;
    let wheels = this.props.config ? this.props.config.wheel_pos : undefined;
    let wheel_coords = wheels ? wheels.map(w => this.wheelattrs2Coords(this.props.config.wheel_rad, this.props.config.wheel_width, w)) : [];
    let xOffset = this.props.width ? this.props.width/2 : undefined;
    let yOffset = this.props.height ? this.props.height/2 : undefined;

    let wheelPairs = []
    if(wheels){
      let maxWheelPosY = wheels.reduce((a,w)=>Math.max(a,w[1]),0);
      let minWheelPosY = wheels.reduce((a,w)=>Math.min(a,w[1]),maxWheelPosY);
      let frontPair = wheels.filter(w=>w[1]==minWheelPosY); //not sure how to initialize min, just did a big number
      let rearPair = wheels.filter(w=>w[1]==maxWheelPosY);
      console.log("FRONT PAIR",frontPair);
      console.log("REAR PAIR", rearPair);
      wheelPairs = [frontPair,rearPair].map((pair)=>transform(pair,xOffset,yOffset,2.0));
    }
   return (
      <React.Fragment>
        //axles
        {wheels && <line x1={wheelPairs[0][0][0]+this.props.config.wheel_width/2} y1={wheelPairs[0][0][1]} 
                    x2={wheelPairs[0][1][0]-this.props.config.wheel_width/2} y2={wheelPairs[0][1][1]} 
                    strokeWidth={5} stroke={this.props.wheelColor}/>}
        {wheels && <line x1={wheelPairs[1][0][0]+this.props.config.wheel_width/2} y1={wheelPairs[1][0][1]} 
                    x2={wheelPairs[1][1][0]-this.props.config.wheel_width/2} y2={wheelPairs[1][1][1]} 
                    strokeWidth={5} stroke={this.props.wheelColor}/>}
        {bumper && this.coords2SVG(bumper,this.props.hullColor,this.props.config.hull_densities[0],xOffset,yOffset)}
        {hull1 && this.coords2SVG(hull1,this.props.hullColor,this.props.config.hull_densities[1],xOffset,yOffset)}
        {hull2 && this.coords2SVG(hull2,this.props.hullColor,this.props.config.hull_densities[2],xOffset,yOffset)}
        {spoiler && this.coords2SVG(spoiler,this.props.hullColor,this.props.config.hull_densities[3],xOffset,yOffset)}
        {wheel_coords.map(w=>this.coords2SVG(w,this.props.wheelColor,0.5+(0.25*this.props.config.friction_lim/1e3),xOffset,yOffset)) }
      </React.Fragment>
      )
  }
}


export default CarSVG;

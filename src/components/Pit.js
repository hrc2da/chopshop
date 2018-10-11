import React, { Component } from 'react';
import UserCarContainer from '../containers/UserCarContainer';
import VertexContainer from '../containers/VertexContainer';
import CompCarContainer from '../containers/CompCarContainer';
import { calculateCarWeight, calculateCarCost } from '../util/carActions';

class Pit extends Component{
  constructor(props) {
     super(props);
    this.vertexRefs = [];
    this.numPolyhulls = 4;
    this.polyhulls = [];
    for(let i=0; i<this.numPolyhulls;i++){
      this.polyhulls.push(this.props.config['hull_poly'+String(i+1)]);
    }
    for(let i=0; i<this.polyhulls.length; i++){
      for(let j=0; j<this.polyhulls[i].length; j++){
        this.vertexRefs.push(React.createRef());
      }
    }
    console.log("THIS MANY REFS:",this.vertexRefs.length);
   }

  render () {
    console.log(this.polyhulls);

    // 4 increments of 48936 from $7312 to $203056
    let cost = Math.floor(calculateCarCost(this.props.config));
    let costIncrements = Math.round((cost - 7312) / 48936);
    // 4 increments of 2249kg from 295kg
    // 4 increments of 0.548 from 0.19425 to 2.38625
    let weight = calculateCarWeight(this.props.config)/5e3;
    let weightIncrements = Math.round((weight - 0.19425) / 0.548);

    let w = this.props.width ? this.props.width : 600;
    let h = this.props.height ? this.props.height : 400;

    let bl = 0.15*Math.min(w,h);
    let tlbX = 0.05*w;
    let tlbY =  0.05*h;
    let tlbPoints = [tlbX,tlbY+bl,tlbX,tlbY,tlbX+bl,tlbY]

    let trbX = 0.95*w;
    let trbY = 0.05*h;
    let trbPoints = [trbX-bl,trbY,trbX,trbY,trbX,trbY+bl]

    let blbX = 0.05*w;
    let blbY =  0.95*h;
    let blbPoints = [blbX,blbY-bl,blbX,blbY,blbX+bl,blbY]

    let brbX = 0.95*w;
    let brbY = 0.95*h;
    let brbPoints = [brbX,brbY-bl,brbX,brbY,brbX-bl,brbY]
    let smallBlockHeight = 33;
    let smallBlockWidth = smallBlockHeight;
    let bigBlockHeight = 99;
    let bigBlockWidth = bigBlockHeight;

    // IN FRONT OF CAR
    let arrowPoints = [
        w/2 - 10, brbY - 50,
        w/2 + 10, brbY - 50,
        w/2 + 10, brbY - 20,
        w/2 + 25, brbY - 20,
        w/2, brbY + 10, // POINT
        w/2 - 25, brbY - 20,
        w/2 - 10, brbY - 20
    ];

    // COST
    let costX = 180;
    let costY = brbY-5;
    let costStacks = [];
    for (let i = 0; i < costIncrements; i++) {
        costStacks.push(i);
    }

	return <React.Fragment>
          // ADDING BACKGROUND GRID
          <defs>
              // DEFINITIONS FOR THE DIFFERENT GRID SIZES
              <pattern id="smallGrid" width={smallBlockWidth} height={smallBlockHeight} patternUnits="userSpaceOnUse">
                  <path d={"M " + smallBlockWidth + " 0 L 0 0 0 " + smallBlockHeight} fill="none" stroke="gray" stroke-width="0.5"/>
              </pattern>

              <pattern id="grid" width={bigBlockWidth} height={bigBlockHeight} patternUnits="userSpaceOnUse">
                  <rect width={bigBlockWidth} height={bigBlockHeight} fill="url(#smallGrid)"/>
                  <path d={"M " + bigBlockWidth + " 0 L 0 0 0 " + bigBlockHeight} fill="none" stroke="gray" stroke-width="1"/>
              </pattern>
          </defs>

          <rect fill="url(#grid)" width={w} height={h} />

          {/*<rect
            fill="none"
            width = {this.props.width ? 0.9*this.props.width : 0.9*600}
            height={this.props.height ? 0.9*this.props.height : 0.9*400}
            stroke="gold"
            strokeDasharray="100 5"
            strokeWidth={10}
            x={this.props.width ? 0.05*this.props.width : 0.05*600}
            y={this.props.height ? 0.05*this.props.height : 0.05*400}
          />*/}

          <polyline
            points={String(tlbPoints)}
            stroke="gold"
            strokeWidth={30}
            strokeLinejoin="bevel"
            fill="black"
          />
          <polyline
            points={String(trbPoints)}
            stroke="gold"
            strokeWidth={30}
            strokeLinejoin="bevel"
            fill="black"
          />
          <polyline
            points={String(blbPoints)}
            stroke="gold"
            strokeWidth={30}
            strokeLinejoin="bevel"
            fill="black"
          />
          <polyline
            points={String(brbPoints)}
            stroke="gold"
            strokeWidth={30}
            strokeLinejoin="bevel"
            fill="black"
          />

          // ARROW
          <polygon
            points={String(arrowPoints)}
            stroke="black"
            strokeWidth={30}
            strokeLinejoin="arcs" // round
            fill="black"
            opacity="0.50"
          />

          // COST
          {costStacks.map((val, index) => {
              return <image xlinkHref="https://i.imgur.com/7AEGspP.png" x={costX} y={costY - (index * 25)} width={80} />
          })}

          {/*<line
            x1={this.props.width ? 0.05*this.props.width : 0.05*600}
            y1={this.props.height ? 0.05*this.props.height : 0.05*400}
            x2={this.props.width ? 0.05*this.props.width : 0.05*600}
            y2={this.props.height ? 0.95*this.props.height : 0.95*400}
            stroke="gold"
            strokeWidth={20}
            strokeDasharray={String(this.props.height?0.9*this.props.height/4:0.9*400/4)+" "
                            +String(this.props.height?0.9*this.props.height/2:0.9*400/2)}
            strokeLinejoin="bevel"
          />
          <line
            x1={this.props.width ? 0.05*this.props.width : 0.05*600}
            y1={this.props.height ? 0.05*this.props.height : 0.05*400}
            x2={this.props.width ? 0.95*this.props.width : 0.95*600}
            y2={this.props.height ? 0.05*this.props.height : 0.05*400}
            stroke="gold"
            strokeWidth={20}
            strokeDasharray={String(this.props.width?0.9*this.props.width/4:0.9*400/4)+" "
                            +String(this.props.width?0.9*this.props.width/2:0.9*400/2)}
            strokeLinejoin="bevel"
          />
          <line
            x1={this.props.width ? 0.95*this.props.width : 0.95*600}
            y1={this.props.height ? 0.05*this.props.height : 0.05*400}
            x2={this.props.width ? 0.95*this.props.width : 0.95*600}
            y2={this.props.height ? 0.95*this.props.height : 0.95*400}
            stroke="gold"
            strokeWidth={20}
            strokeDasharray={String(this.props.height?0.9*this.props.height/4:0.9*400/4)+" "
                            +String(this.props.height?0.9*this.props.height/2:0.9*400/2)}
            strokeLinejoin="bevel"
          />*/}
          <UserCarContainer />
          <CompCarContainer />
          {this.polyhulls.map((p,i)=>p.map((v,j)=>{
            console.log(0+this.polyhulls.slice(0,i).reduce((a,p)=>a+p.length,0));
            return <VertexContainer
            ref={this.vertexRefs[j+this.polyhulls.slice(0,i).reduce((a,p)=>a+p.length,0)]} //indexing over jagged array
            polygon={"hull_poly"+String(i+1)}
            index={j} />
          }))}
    </React.Fragment>
}
}
export default Pit;

import React, { Component } from 'react';
import UserCarContainer from '../containers/UserCarContainer';
import VertexContainer from '../containers/VertexContainer';
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
    let w = this.props.width ? this.props.width : 600
    let h = this.props.height ? this.props.height :400
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
	return <React.Fragment>
          <rect fill="gray" width={this.props.width ? this.props.width : 600} height={this.props.height ? this.props.height : 400}/>
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

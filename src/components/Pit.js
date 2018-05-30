import React, { Component } from 'react';
import UserCarContainer from '../containers/UserCarContainer';
import VertexContainer from '../containers/VertexContainer';
class Pit extends Component{
  constructor(props) {
     super(props);
    this.vertexRefs = [];
    this.polyhulls = [1,2,3,4];
    for(let i=0; i<this.polyhulls.length; i++){
      let h = this.polyhulls[i];
      for(let j=0; j<this.props.config['hull_poly'+h].length; j++){
        this.vertexRefs.push(React.createRef());
      }
    }
   } 
  render () {
	return <React.Fragment>
          <rect fill="gray" width={this.props.width ? this.props.width : 600} height={this.props.height ? this.props.height : 400}/>
          <UserCarContainer />
          {this.polyhulls.map((i)=>this.props.config['hull_poly'+i].map((v,j)=>{
            return <VertexContainer ref={this.vertexRefs[i+j*this.polyhulls.length]} polygon={"hull_poly"+i} index={j} />
          }))}
    </React.Fragment>
}
}
export default Pit;

import React, { Component } from 'react';
import UserCarContainer from '../containers/UserCarContainer';
import VertexContainer from '../containers/VertexContainer';
class Pit extends Component{
  constructor(props) {
     super(props);
    this.vertexRefs = [];
   } 
  render () {
	return <React.Fragment>
          <rect fill="gray" width={this.props.width ? this.props.width : 600} height={this.props.height ? this.props.height : 400}/>
          <UserCarContainer />
          {[1,2,3,4].map((i)=>this.props.config['hull_poly'+i].map((v,j)=>{
            let vref = React.createRef();
            this.vertexRefs.push(vref);
            return <VertexContainer ref={vref} polygon={"hull_poly"+i} index={j} />
          }))}
    </React.Fragment>
}
}
export default Pit;

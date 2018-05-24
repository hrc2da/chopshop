import React from 'react';
import BodyPNGContainer from '../containers/BodyPNGContainer';
let Pit = ({width,height}) =>{
	return <React.Fragment>
          <rect fill="gray" width={width ? width : 600} height={height ? height : 400}/>
    </React.Fragment>
}
export default Pit;

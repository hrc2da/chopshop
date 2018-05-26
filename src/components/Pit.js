import React from 'react';
import UserCarContainer from '../containers/UserCarContainer';
let Pit = ({width,height}) =>{
	return <React.Fragment>
          <rect fill="gray" width={width ? width : 600} height={height ? height : 400}/>
          <UserCarContainer />
    </React.Fragment>
}
export default Pit;

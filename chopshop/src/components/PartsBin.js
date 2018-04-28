import React from 'react';
import Block from './Block';
let PartsBin = ({width,height,x,y}) =>{
	return <React.Fragment>
			<rect 
			width={width ? width : 600} 
			height={height ? height : 400} 
			y={y?y:0}
			style={{fill:"white",
				strokeWidth:3,
				stroke:"black"}}
		/>
		<Block x={10} y={y+10} />
		</React.Fragment>
}
export default PartsBin;

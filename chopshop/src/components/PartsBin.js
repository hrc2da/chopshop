import React from 'react';
import BlockContainer from '../containers/BlockContainer';




let PartsBin = ({width,height,x,y,partList}) =>{
	let blockSize = 60; 
  console.log(partList);
  return <React.Fragment>
			<rect 
			width={width ? width : 600} 
			height={height ? height : 400} 
			y={y?y:0}
			style={{fill:"white",
				strokeWidth:3,
				stroke:"black"}}
		/>
    {Object.keys(partList).map((key, i) => <BlockContainer x={10+i*(blockSize+10)} y = {y+10} width = {width} size = {blockSize} img = {partList[key].img} type = {partList[key].type} name = {partList[key].name}/>)}   
    </React.Fragment>
}
export default PartsBin;

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
    {Object.keys(partList).map((key, i) => <BlockContainer 
      x = {getX(0, i, blockSize, 10, parseInt(width))}
      y = {getY(y, i, blockSize, 10, parseInt(width))}
      width = {width} 
      size = {blockSize} 
      img = {partList[key].img} 
      type = {partList[key].type} 
      name = {partList[key].name}
      value = {partList[key].value}/>)}   
    </React.Fragment>
}

let getX = (x, i, blockSize, margin, maxWidth) => {
  
  //recalculating boundary without remainder, i.e boundary associated with
  //maximum number of blocks
  let realBoundary = maxWidth-maxWidth%(blockSize+margin); 
  return x+margin+i*(blockSize+margin)%realBoundary;
}
let getY = (y, i, blockSize, margin, maxWidth) => {
  let realBoundary = maxWidth-maxWidth%(blockSize+margin);
  return y+margin+(blockSize+margin)*Math.floor(i*(blockSize+margin)/realBoundary);
}





export default PartsBin;

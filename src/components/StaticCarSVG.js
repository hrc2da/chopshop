import React from "react";
import { clockwiseSort } from "../util/polygons";

const degrees_to_radians = (degrees) => {
  return degrees * (Math.PI / 180);
};

const transform = (coords, xOffset, yOffset, scale = 1.0, rotation = 90) => {
  //for now, just rotate 90 degrees, but should make this
  let theta = degrees_to_radians(rotation);
  return coords.map((v) => [
    parseInt(scale * (Math.cos(theta) * v[0] - Math.sin(theta) * v[1])) +
      xOffset,
    parseInt(scale * (Math.sin(theta) * v[0] + Math.cos(theta) * v[1])) +
      yOffset,
  ]);
  // console.log('GOT COORDS',coords);
  // return coords.map(v=>[parseInt(scale*(v[0])+xOffset), parseInt(scale*(v[1])+yOffset)])
};

const invtransform = (coords, xOffset, yOffset, scale = 2.0, rotation = 90) => {
  return coords.map((v) => [
    parseInt((v[0] - xOffset) * (1.0 / scale)),
    parseInt((v[1] - yOffset) * (1.0 / scale)),
  ]);
};

const coords2SVG = (
  coords,
  fill,
  density = 2.0,
  xOffset = 275,
  yOffset = 200,
  scale = 2.0,
  rotation = 90,
  className = ""
) => {
  //console.log("DENSITy",density)
  let offsetCoords = transform(coords, xOffset, yOffset, scale, rotation); //coords.map(x=>[parseInt(scale*(x[1])+xOffset), parseInt(scale*(x[0])+yOffset)]);
  let sortedCoords = clockwiseSort(offsetCoords); //[offsetCoords[0],offsetCoords[1], offsetCoords[3], offsetCoords[2]];//.sort((a,b)=>a[0]-b[0])
  //let pathStr = "M 10 10 ";
  //console.log("BEFORE",offsetCoords);
  //let temp = sortedCoords[1];
  //sortedCoords[1] = sortedCoords[2];
  //sortedCoords[2] = temp;
  //console.log("AFTER",sortedCoords);
  let pathStr = "M " + sortedCoords[0][0] + " " + sortedCoords[0][1];
  for (let c = 1; c < sortedCoords.length; c++) {
    pathStr += " L " + sortedCoords[c][0] + " " + sortedCoords[c][1];
  }
  //close the path
  pathStr += " L " + sortedCoords[0][0] + " " + sortedCoords[0][1];
  //console.log(pathStr);
  if (className != "") {
    return (
      <path
        d={pathStr}
        fill={"#" + fill}
        class={className}
        stroke="black"
        fillOpacity={parseFloat(density) / 1.0}
      />
    );
  } else {
    return (
      <path
        d={pathStr}
        fill={"#" + fill}
        stroke="black"
        fillOpacity={parseFloat(density) / 1.0}
      />
    );
  }
};

const wheelattrs2Coords = (wheel_r, wheel_w, wheel_pos) => {
  return [
    [wheel_pos[0] - wheel_w / 2, wheel_pos[1] + wheel_r],
    [wheel_pos[0] + wheel_w / 2, wheel_pos[1] + wheel_r],
    [wheel_pos[0] - wheel_w / 2, wheel_pos[1] - wheel_r],
    [wheel_pos[0] + wheel_w / 2, wheel_pos[1] - wheel_r],
  ];
};

const renderCar = (carConfig, scale, carWidth, carLength, rotation) => {
  let wheelColor = "000000";
  let bumper = carConfig.hull_poly1;
  let hull1 = carConfig.hull_poly2;
  let hull2 = carConfig.hull_poly3;
  let spoiler = carConfig.hull_poly4;
  let wheels = carConfig.wheel_pos;
  let wheel_coords = wheels.map((w) =>
    wheelattrs2Coords(carConfig.wheel_rad, carConfig.wheel_width, w)
  );
  let xOffset = carWidth / 2;
  let yOffset = carLength / 2;
  if(rotation==90 || rotation ==270){
    xOffset = carLength/2;
    yOffset = carWidth/2;
  }
  // let rotation = rotation;
  let className = "carBody";
  let SVGResult;

  let wheelPairs = [];
  if (wheels) {
    let maxWheelPosY = wheels.reduce((a, w) => Math.max(a, w[1]), 0);
    let minWheelPosY = wheels.reduce((a, w) => Math.min(a, w[1]), maxWheelPosY);
    let frontPair = wheels.filter((w) => w[1] == minWheelPosY); //not sure how to initialize min, just did a big number
    let rearPair = wheels.filter((w) => w[1] == maxWheelPosY);
    // console.log("FRONT PAIR",frontPair);
    // console.log("REAR PAIR", rearPair);
    wheelPairs = [frontPair, rearPair].map((pair) =>
      transform(pair, xOffset, yOffset, scale, rotation)
    );
  }

  //   SVGResult = "<svg><line x1=10 y1=10 x2=50 y2=50 strokeWidth=5 stroke='black'/></svg>"
  SVGResult = (
    <React.Fragment>
      <line
        x1={wheelPairs[0][0][0] + carConfig.wheel_width / 2}
        y1={wheelPairs[0][0][1]}
        x2={wheelPairs[0][1][0] - carConfig.wheel_width / 2}
        y2={wheelPairs[0][1][1]}
        strokeWidth={5}
        stroke={wheelColor}
      />
      <line
        x1={wheelPairs[1][0][0] + carConfig.wheel_width / 2}
        y1={wheelPairs[1][0][1]}
        x2={wheelPairs[1][1][0] - carConfig.wheel_width / 2}
        y2={wheelPairs[1][1][1]}
        strokeWidth={5}
        stroke={wheelColor}
      />
      {coords2SVG(
        bumper,
        carConfig.color,
        carConfig.hull_densities[0],
        xOffset,
        yOffset,
        scale,
        rotation,
        className
      )}
      {coords2SVG(
        hull1,
        carConfig.color,
        carConfig.hull_densities[1],
        xOffset,
        yOffset,
        scale,
        rotation,
        className
      )}
      {coords2SVG(
        hull2,
        carConfig.color,
        carConfig.hull_densities[2],
        xOffset,
        yOffset,
        scale,
        rotation,
        className
      )}
      {coords2SVG(
        spoiler,
        carConfig.color,
        carConfig.hull_densities[3],
        xOffset,
        yOffset,
        scale,
        rotation,
        className
      )}
      {wheel_coords.map((w) =>
        coords2SVG(
          w,
          wheelColor,
          0.6 + (0.25 * carConfig.friction_lim) / 1e4,
          xOffset,
          yOffset,
          scale,
          rotation
        )
      )}
    </React.Fragment>
  );
  console.log(SVGResult);
  return SVGResult;
};

let StaticCarSVG = (props) => {
  return renderCar(props.carConfig, props.scale, props.width, props.height, props.rotation);
};

export default StaticCarSVG;

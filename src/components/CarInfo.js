import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Slider from '@material-ui/lab/Slider';
import Tooltip from '@material-ui/core/Tooltip';

export const calculateCarCost = (config)=>{
  //body material cost
  const bodyCost = calculateBodyCost(config);
  //tire cost
  const tireCost = calculateTireCost(config);
  //wheel cost
  const wheelCost = calculateWheelCost(config);
  //engine cost
  const engineCost = calculateEngineCost(config);
  //drivetrain cost
  const drivetrainCost = calculateDrivetrainCost(config);
  return bodyCost + tireCost + wheelCost + engineCost + drivetrainCost;
}

export const calculateBodyCost = (config)=>{
  //get the area of each hull and sum for now
  let materialCost = 10; //cost per pixel of material  
  //in the future, this will be a function^^
  return materialCost*calculateBodyWeight(config);
}
export const calculateTireCost = (config) =>{
  //tire cost is based on the width, tread, and wheel radius 
  return 8*(config.wheel_rad+config.wheel_width+config.friction_lim/2);
}
export const calculateWheelCost = (config)=>{
  //wheel cost is based on wheel radius and moment
  return 4*(Math.PI*config.wheel_rad*config.wheel_rad)+10*config.wheel_width;
}
export const calculateEngineCost = (config)=>{
  //engine cost is based on power
  return 25*(config.eng_power/1e4)*(config.eng_power/1e4);
}
export const calculateDrivetrainCost = (config)=>{
  //switch statement for fwd, rwd, awd
  return 1000;//
}

export const trapezoidArea = (vertices)=>{
  console.log("TRAPEZOIDAREA",vertices)
  let yMax = vertices.reduce((a,v)=>Math.max(a,v[1]),-1e7);
  let yMin = vertices.reduce((a,v)=>Math.min(a,v[1]),yMax);
  let h = Math.abs(yMax-yMin);
  let b1verts = vertices.filter((v)=>v[1]==yMax);
  let b2verts = vertices.filter((v)=>v[1]==yMin);
  let b1 = Math.abs(b1verts[0][0]-b1verts[1][0]);
  let b2 = Math.abs(b2verts[0][0]-b2verts[1][0]);
  return 0.5*(b1+b2)*h;
}

export const octagonArea = (vertices)=>{
  let yMax = vertices.reduce((a,v)=>Math.max(a,v[1]),-1e7);
  let yMin = vertices.reduce((a,v)=>Math.min(a,v[1]),yMax);
  let t1verts = vertices.filter((v)=>v[1]==yMax);
  let t2verts = vertices.filter((v)=>v[1]==yMin);
  let centerverts = vertices.filter((v)=>(v[1]!=yMax && v[1]!=yMin));
  let centerYMax = centerverts.reduce((a,v)=>Math.max(a,v[1]),-1e7);
  let centerYMin = centerverts.reduce((a,v)=>Math.min(a,v[1]),centerYMax);
  t1verts = t1verts.concat(centerverts.filter(v=>v[1]==centerYMax));
  t2verts = t2verts.concat(centerverts.filter(v=>v[1]==centerYMin));
  console.log("CENTERVERTS",centerverts,"T1VERTS",t1verts,"CENTERYMAX",centerYMax);
  return trapezoidArea(t1verts)+trapezoidArea(t2verts)+trapezoidArea(centerverts);
}

export const calculateBodyWeight = (config)=>{
  let hulls = [config.hull_poly1,config.hull_poly2,config.hull_poly3,config.hull_poly4];
  let areas = [];
  for(let hull in hulls){
    if(hulls[hull].length == 4){
      areas.push(trapezoidArea(hulls[hull]));
    }
    else if(hulls[hull].length == 8){
      areas.push(octagonArea(hulls[hull]));
    }
    else{
      console.log("unknown polygon");
    }
  }
  console.log("ARRRRIAAAAAS",areas)
  return 0.125*areas.map((h,i)=>h*config.hull_densities[i]).reduce((a,h)=>a+h);
}

export const calculateEngineWeight = (config)=>{
  //for now, 1hp=1kg
  return config.eng_power/1e3;
}

export const calculateCarWeight = (config)=>{
  let bodyWeight = calculateBodyWeight(config);
  let engineWeight = calculateEngineWeight(config);
  console.log("WEIGHTS:",bodyWeight,engineWeight);
  return bodyWeight+engineWeight;
}

export const calculateCarLength = (config)=>{
  let bumper = config.hull_poly1;
  let spoiler = config.hull_poly4;
  let tip = bumper.reduce((a,p)=>Math.max(a,p[1]),0);//need a really large number
  let tail = spoiler.reduce((a,p)=>Math.min(a,p[1]),1e5);
  return Math.abs(tip-tail);
}

export const calculateCarWidth = (config)=>{
  let max=0;
  let hulls = [config.hull_poly1,config.hull_poly2,config.hull_poly3,config.hull_poly4];
  for(let hull in hulls){
    let maxX = hulls[hull].reduce((a,p)=>Math.max(a,p[0]),0);
    if(maxX > max){
      max=maxX;
    }
  }

  let min=max;
  for(let hull in hulls){
    let minX = hulls[hull].reduce((a,p)=>Math.min(a,p[0]),max);
    if(minX < min){
      min=minX;
    }
  }
  return Math.abs(max-min);
}

let CarInfo = ({config,cost,handleSlider,readOnly}) =>{
  if(!config){
    return <div>No Car Selected</div>
  }
  return <React.Fragment>
          <Table>
            <TableBody>
               <TableRow>
                <TableCell>Wheel Radius:</TableCell>
                <TableCell>
                  <Tooltip title={config.wheel_rad} placement="left" open={true}>
                    <Slider
                      id="WHEEL_RAD"
                      max={40}
                      min={15}
                      step={1}
                      value={config.wheel_rad}
                      disabled = {readOnly}
                      onChange={(e,v)=>handleSlider(e,v,"WHEEL_RAD")}
                    />
                  </Tooltip>
                </TableCell>
               </TableRow>
               <TableRow>
                <TableCell>Wheel Width:</TableCell>
                <TableCell>
                  <Tooltip title={config.wheel_width} placement="left" open={true}>
                    <Slider
                      id="WHEEL_WIDTH"
                      max={40}
                      min={5}
                      step={1}
                      value={config.wheel_width}
                      disabled={readOnly}
                      onChange={(e,v)=>handleSlider(e,v,"WHEEL_WIDTH")}
                    />
                  </Tooltip>
                </TableCell>
               </TableRow>
               <TableRow>
                <TableCell>Tire Tread:</TableCell>
                <TableCell>
                  <Tooltip title={Math.floor(config.friction_lim/1e2)} placement="left" open={true}>
                    <Slider
                      id="FRICTION_LIM"
                      max={10}
                      min={1}
                      step={1}
                      value={Math.floor(config.friction_lim/1e2)}
                      disabled={readOnly}
                      onChange={(e,v)=>handleSlider(e,v*1e2,"FRICTION_LIM")}
                    />
                  </Tooltip>
                </TableCell>
               </TableRow>
<TableRow>
                <TableCell>Horsepower:</TableCell>
                <TableCell>
                  <Tooltip title={Math.floor(config.eng_power/1e3)} placement="left" open={true}>
                    <Slider
                      id="ENG_POWER"
                      max={600}
                      min={10}
                      step={10}
                      value={Math.floor(config.eng_power/1e3)}
                      disabled={readOnly}
                      onChange={(e,v)=>handleSlider(e,v*1e3,"ENG_POWER")}
                    />
                  </Tooltip>
                </TableCell>
               </TableRow>
               <TableRow>
                <TableCell>Estimated Cost:</TableCell>
                <TableCell>${Math.floor(calculateCarCost(config))}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Car Weight:</TableCell>
                <TableCell>{Math.floor(calculateCarWeight(config))} kg</TableCell>
              </TableRow>
               <TableRow>
                <TableCell>Car Length:</TableCell>
                <TableCell>{(calculateCarLength(config)*.0254).toFixed(2) /*inches to m*/} m</TableCell>
              </TableRow>
               <TableRow>
                <TableCell>Car Width:</TableCell>
                <TableCell>{(calculateCarWidth(config)*.0254).toFixed(2)} m</TableCell>
              </TableRow>
            </TableBody>
          </Table>
      </React.Fragment>
}

export default CarInfo;

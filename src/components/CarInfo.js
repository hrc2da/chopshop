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
  let materialCost = 0.5; //cost per pixel of material  
  //in the future, this will be a function^^
  return 10000;
}
export const calculateTireCost = (config) =>{
  //tire cost is based on the width, tread, and wheel radius 
  return 4*(config.wheel_rad+config.wheel_width+config.friction_lim/1e2);
}
export const calculateWheelCost = (config)=>{
  //wheel cost is based on wheel radius and moment
  return 4*(Math.PI*config.wheel_rad*config.wheel_rad);
}
export const calculateEngineCost = (config)=>{
  //engine cost is based on power
  return 100*config.eng_power/1e4;
}
export const calculateDrivetrainCost = (config)=>{
  //switch statement for fwd, rwd, awd
  return 1000;//
}

let CarInfo = ({config,cost,handleSlider}) =>{
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
                <TableCell>900 kg</TableCell>
              </TableRow>
               <TableRow>
                <TableCell>Car Length:</TableCell>
                <TableCell>4.5 m</TableCell>
              </TableRow>
               <TableRow>
                <TableCell>Car Width:</TableCell>
                <TableCell>3 m</TableCell>
              </TableRow>
            </TableBody>
          </Table>
      </React.Fragment>
}

export default CarInfo;

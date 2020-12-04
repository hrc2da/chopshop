import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import InputLabel from '@material-ui/core/InputLabel';
import {
    calculateCarCost,
    calculateBodyCost,
    calculateTireCost,
    calculateWheelCost,
    calculateEngineCost,
    calculateDrivetrainCost,
    trapezoidArea,
    octagonArea,
    calculateBodyWeight,
    calculateEngineWeight,
    calculateCarWeight,
    calculateCarLength,
    calculateCarWidth
} from '../util/carActions';

import {
  WHEEL_RAD, WHEEL_WIDTH, FRICTION_LIM, ENG_POWER, 
  BRAKE_SCALAR, STEERING_SCALAR, REAR_STEERING_SCALAR, 
  MAX_SPEED, COLOR
} from '../actions/carConfig';

let CarInfoCompact = ({state,config,cost,handleSlider,readOnly}) =>{
  if(!config){
    return <div>No Car Selected</div>
  }

  let carLengthTableCell = <TableCell>{(calculateCarLength(config)*.0254).toFixed(2) /*inches to m*/} m</TableCell>
  let carWidthTableCell = <TableCell>{(calculateCarWidth(config)*.0254).toFixed(2) /*inches to m*/} m</TableCell>

  return <React.Fragment>
          <Table>
            <TableBody>
               <TableRow>
                <TableCell>Wheel Radius: {config.wheel_rad}</TableCell>
                <TableCell>Brake Sensitivity: {config.brake_scalar}</TableCell>
                <TableCell>Color: {config.color}</TableCell>
               </TableRow>
               <TableRow>
                <TableCell>Wheel Width: {config.wheel_width}</TableCell>
                <TableCell>Steering Sensitivity: {config.steering_scalar}</TableCell>
                <TableCell>Estimated Cost: ${Math.floor(calculateCarCost(config))}</TableCell>
               </TableRow>
               <TableRow>
                <TableCell>Tire Tread: {Math.floor(config.friction_lim/1e2)}</TableCell>
                <TableCell>Rear Steering Power: {config.rear_steering_scalar}</TableCell>
                <TableCell>Car Weight: {Math.floor(calculateCarWeight(config))} lb</TableCell>
               </TableRow>
               <TableRow>
                <TableCell>Horsepower: {Math.floor(config.eng_power/1e3)}</TableCell>
                <TableCell>Top Speed Limiter: {config.max_speed}</TableCell>
                {/* <TableCell>Car Width:{carWidthTableCell} m</TableCell> */}
               </TableRow>
                
               {/* <TableRow>
                <TableCell>Car Length:</TableCell>
                {carLengthTableCell}
              </TableRow>
               <TableRow>
                <TableCell>Car Width:</TableCell>
                {carWidthTableCell}
              </TableRow> */}
            </TableBody>
          </Table>
      </React.Fragment>
}

export default CarInfoCompact;

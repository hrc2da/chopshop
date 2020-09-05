import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Slider from '@material-ui/lab/Slider';
import Tooltip from '@material-ui/core/Tooltip';
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

let CarInfo = ({state,config,cost,handleSlider,readOnly}) =>{
  if(!config){
    return <div>No Car Selected</div>
  }

  let carLengthTableCell = <TableCell>{(calculateCarLength(config)*.0254).toFixed(2) /*inches to m*/} m</TableCell>
  let carWidthTableCell = <TableCell>{(calculateCarWidth(config)*.0254).toFixed(2) /*inches to m*/} m</TableCell>

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
                <TableCell>Color:</TableCell>
                <TableCell>
                  <Tooltip title={config.color} placement="left" open={true}>
                    <Slider
                      id="COLOR"
                      max={16777215}
                      min={5}
                      step={1}
                      value={config.color}
                      disabled={readOnly}
                      onChange={(e,v)=>handleSlider(e,v,"COLOR")}
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
                {carLengthTableCell}
              </TableRow>
               <TableRow>
                <TableCell>Car Width:</TableCell>
                {carWidthTableCell}
              </TableRow>
            </TableBody>
          </Table>
      </React.Fragment>
}

export default CarInfo;

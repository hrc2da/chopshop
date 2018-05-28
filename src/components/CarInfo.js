import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Slider from '@material-ui/lab/Slider';
import Tooltip from '@material-ui/core/Tooltip';

let CarInfo = ({config,handleSlider}) =>{
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
                      max={20}
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
                  <Tooltip title={Math.floor(config.friction_lim/1e4)} placement="left" open={true}>
                    <Slider
                      id="FRICTION_LIM"
                      max={100}
                      min={30}
                      step={1}
                      value={Math.floor(config.friction_lim/1e4)}
                      onChange={(e,v)=>handleSlider(e,v*1e4,"FRICTION_LIM")}
                    />
                  </Tooltip>
                </TableCell>
               </TableRow>
<TableRow>
                <TableCell>Horsepower:</TableCell>
                <TableCell>
                  <Tooltip title={Math.floor(config.eng_power/1e6)} placement="left" open={true}>
                    <Slider
                      id="ENG_POWER"
                      max={600}
                      min={100}
                      step={10}
                      value={Math.floor(config.eng_power/1e6)}
                      onChange={(e,v)=>handleSlider(e,v,"ENG_POWER")}
                    />
                  </Tooltip>
                </TableCell>
               </TableRow>
               <TableRow>
                <TableCell>Estimated Cost:</TableCell>
                <TableCell>$85,000</TableCell>
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

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
                <TableCell>Horsepower:</TableCell>
                <TableCell>
                  <Tooltip title={Math.floor(config.eng_power/1e6)} placement="left" open={true}>
                    <Slider
                      max={600}
                      min={100}
                      step={10}
                      value={Math.floor(config.eng_power/1e6)}
                      onChange={(e,v)=>handleSlider(e,v)}
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

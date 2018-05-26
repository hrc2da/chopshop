import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

let CarInfo = ({config}) =>{
  return <React.Fragment>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>HorsePower:</TableCell>
                <TableCell>350 hp</TableCell>
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
        <Button variant="raised" color="primary">Test Drive</Button>
      </React.Fragment>
}

export default CarInfo;

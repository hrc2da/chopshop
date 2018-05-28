import { ResponsiveScatterPlot } from '@nivo/scatterplot';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


let CostBenefitPlot = ({testedCars,gaCars})=>{
  console.log("CARS",testedCars);
  return <React.Fragment>
    <ResponsiveScatterPlot
  //width={600}
 // height={400}
  margin={{
        top: 60,
          right: 80,
          bottom: 80,
          left: 80
      }}
  symbolSize={10}
  axisBottom={{
    "orient": "bottom",
    "tickSize": 5,
    "tickPadding": 5,
    "tickRotation": 0,
    "legend": "cost",
    "legendPosition": "center",
    "legendOffset":46
  }}
  axisLeft={{
    orient: "bottom",
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "weight",
    legendPostion: "center",
    legendOffset: 46
  }}
  data={[
        {id: 'My Cars',data: [
                  {id: 0,x: 0,y: 2},
                  {id: 1,x: 1,y: 2.1},
                  {id: 2,x: 2,y: 2.3},
                ]},
        {id: 'Computer-Generated Cars',data: [
                  {id: 0,x: 0,y: 3.2},
                  {id: 1,x: 3,y: 3.3},
                  {id: 2,x: 5,y: 3.6},
                ]},
      ]}
  legends={[{
          anchor: 'bottom-left',
          direction: 'row',
          translateY: 60,
        }]}
/>
    <Table>
    <TableHead><TableCell>Tested Cars</TableCell></TableHead>
        {testedCars.map(car=>{
        console.log(car['result']);
          return <TableRow>
            {car['result'].map(objective=>{
              console.log(objective);
              return <TableCell>{objective}</TableCell>
            })}

        </TableRow>})}
    </Table>
    </React.Fragment>
  }
export default CostBenefitPlot;

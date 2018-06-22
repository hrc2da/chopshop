import { ScatterPlot,ResponsiveScatterPlot } from '@nivo/scatterplot';
import { Scatter } from 'react-chartjs-2';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export const adjustReward = (result)=>{
  const rewardScale = 1.0;
  const gasScale = 1.0/1e9;
  const grassScale = 1.0;
  return [rewardScale*result[0],gasScale*result[1],grassScale*result[2]];
}



let CostBenefitPlot = ({testedCars,gaCars})=>{
  console.log("CARS",testedCars);
  let cars = [];
  let labels = [];
  if(testedCars.length>0){
    cars.push({
      label: 'My Cars',
      data: testedCars.map(((car,index)=>{return {id:index, x: car['result'][0], y: car['result'][1]};})),
      backgroundColor: 'rgba(75,192,192,0.4)',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBorderWidth: 5,
      pointHoverRadius: 20,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 10,
      pointRadius: 10,
      pointHitRadius: 50,
    });
    labels.push('My Cars');
  }
  if(gaCars.length>0){
    cars.push({
      label: 'Computer-Generated Cars',
      data: gaCars.map(((car,index)=>{return {id:index, x: car['result'][0], y: car['result'][1]};}))
    });
    labels.push('Computer-Generated Cars');
  }
  const data = {
    labels:labels,
    datasets:cars
  }
  console.log(cars);
  return <div>
  <Scatter data={data} />
</div> 
};
  /*return <React.Fragment>
    <div height={450}>
    <ScatterPlot
 height={250}
 width={400}
  margin={{
        top: 10,
          right: 10,
          bottom: 10,
          left: 20
      }}
      enableGridX={true}
      enableGridY={true}
  symbolSize={10}
  axisBottom={{
    orient: "bottom",
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "cost",
    legendPosition: "bottom",
    legendOffset:5
  }}
  axisLeft={{
    orient: "left",
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "weight",
    legendPostion: "left",
    legendOffset:-5 
  }}
  data={cars}
  legends={[{
          anchor: 'bottom-left',
          direction: 'row',
          translateY: 60,
        }]}
/></div>
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
  }*/
export default CostBenefitPlot;

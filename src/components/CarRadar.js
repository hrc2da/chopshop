import React from "react";
import { Chart, Radar } from "react-chartjs-2";
import { binarySearchClosestAngle } from "../util/search";
const _labels = ["Material Cost", "Fuel Cost", "Distance", "Hazard"];

let drawArrow = function(context, fromx, fromy, tox, toy) {
  // var headlen = 10;
  // var dx = tox - fromx;
  // var dy = toy - fromy;
  // var angle = Math.atan2(dy, dx);
  context.save();
  context.strokeStyle = '#ff0000';
  context.beginPath();
  context.moveTo(fromx, fromy);
  context.lineTo(tox, toy);
  context.lineWidth = 15;
  context.stroke();
  context.restore();
  // context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
  // context.moveTo(tox, toy);
  // context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
}

let CarRadar = ({
  labels,
  longlabels,
  values,
  config,
  gas,
  reward,
  grass,
  designId,
  title,
  showLabels,
  fontSize,
  height,
  width,
  showTooltips,
  handleAxisHover
}) => {
  let data = {
    labels: labels,
    longlabels: longlabels,
    datasets: [
      {
        label: title,
        backgroundColor: "#64b5f6",
        borderColor: "rgba(13,71,161,0.5)",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        pointRadius: showLabels ? 3 : 0,
        data: values,
      },
    ],
  };
  let angles = [];
  for(let i=0; i<labels.length; i++){
    angles.push(2*i*Math.PI/labels.length);
  }
  return (
    <Radar
      data={data}
      height={height}
      width= {width? width: undefined}
      // plugins={[{
      //   id: 'myEventCatcher',
      //   beforeEvent(chart, args, pluginOptions) {
      //     const event = args.event;
      //     if (true) {
      //       console.log("hover");
      //       console.log(args);
      //       console.log(chart);
      //       console.log(pluginOptions);
      //       console.log(chart.scale.getIndexAngle(2));
            // const canvasPosition = Chart.helpers.getRelativePosition(e, chart);

            // Substitute the appropriate scale IDs
            // console.log(chart.scalegetLabelForPixel(canvasPosition.x));
            // const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
            // console.log("("+dataX+","+dataY+")");
      //     }
      //   }
      // }]}
      options={{
        tooltips: {
          enabled: showTooltips,
          displayColors: false,
          callbacks: {
              label: function(toolTipItems,data) {
                let featureIndex = toolTipItems.index;
                if(data.longlabels){
                  return data.longlabels[featureIndex];
                }
                let datasetIndex = toolTipItems.datasetIndex;
                return data.labels[featureIndex]+": "+toolTipItems.value;
              },
              title: function(toolTipItems,data){
                return null;
              }
            }
        },
        hover: {
          mode: 'nearest',
          intersect: true,
          onHover: function(e) {
            this.chart.options.scales = {
              r: {
                display: true
              }
            }
            this.chart.update()
            if(handleAxisHover){
             let point = Chart.helpers.getRelativePosition(e,this);
             let center = this.scale.getBasePosition();
             console.log("x: "+String(point.x-center.x));
             console.log("y: "+String(center.y-point.y));
             let length = this.scale.getDistanceFromCenterForValue(1);
             let angleDict = Chart.helpers.getAngleFromPoint(center,point);
            //  let angle = angleDict.angle;
             let distance = angleDict.distance;
             if(distance > 0.9*length || distance < 0.3*length){
               return;
             }
             let angle = Math.atan2((center.y-point.y),parseFloat(point.x-center.x));
             angle = angle > 0 ? angle : 2*Math.PI + angle;
             angle = -angle +Math.PI/2;
             angle = angle > 0 ? angle : 2*Math.PI + angle;
             console.log("angle:"+String(angle));
             let index = binarySearchClosestAngle(angles,angle);
             console.log(longlabels[index]);
             
              drawArrow(this.chart.ctx, center.x, center.y, center.x + length*Math.cos(angle), center.y+ length*Math.sin(angle))
            //  drawArrow(this.chart.ctx, e.x, e.y, e.x + length*Math.cos(angle), e.y+ length*Math.sin(angle))
             return handleAxisHover(e,longlabels[index],designId);
            //  let rectangle = this.canvas.getBoundingClientRect();
            //  let closestPoint = this.getDatasetMeta(0).data[index].getCenterPoint();
              
            //  let mouseMoveEvent = new MouseEvent('mouseout', {
            //     view: window,
            //     clientX: rectangle.left + closestPoint.x,
            //     clientY: rectangle.top + closestPoint.y
            //   });
            // console.log(mouseMoveEvent);
            // this.canvas.dispatchEvent(mouseMoveEvent);
            }

    
            //  if(point.length>0){
            //   console.log(point);
            //  }
             
            //  if (point.length) e.target.style.cursor = 'pointer';
            //  else e.target.style.cursor = 'default';
          }
       },
        plugins: [{
            id: 'myEventCatcher',
            beforeEvent(chart, args, pluginOptions) {
              const event = args.event;
              if (true) {
                console.log("hover");
                console.log(args);
                console.log(chart);
              }
            }
          }],
        
        scale: {
          // ticks:{
          //     userCallback: (value,index,values)=>''
          // },
          ticks: {
            beginAtZero: true,
            max: 1,
            min: 0,
            stepSize: 0.25,
            display: false,
          },
          pointLabels: {
            fontSize: fontSize ? fontSize : 16,
            fontColor: "#0D47A1",
            display: showLabels
          },
          gridLines: {
            color: "rgba(13,71,161,0.5)",
          },
          angleLines: {
            color: "rgba(13,71,161,0.5)",
          },
        },
      }}
      legend={{
        display: false,
        position: "left",
      }}
    />
  );
};

export default CarRadar;

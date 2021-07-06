import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import InputLabel from "@material-ui/core/InputLabel";
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
  calculateCarWidth,
} from "../util/carActions";

import {
  WHEEL_RAD,
  WHEEL_WIDTH,
  FRICTION_LIM,
  ENG_POWER,
  BRAKE_SCALAR,
  STEERING_SCALAR,
  REAR_STEERING_SCALAR,
  MAX_SPEED,
  COLOR,
} from "../actions/carConfig";

let CarInfo = ({ state, config, cost, handleSlider, readOnly }) => {
  if (!config) {
    return <div>No Car Selected</div>;
  }

  let carLengthTableCell = (
    <TableCell>
      {(calculateCarLength(config) * 0.0254).toFixed(2) /*inches to m*/} m
    </TableCell>
  );
  let carWidthTableCell = (
    <TableCell>
      {(calculateCarWidth(config) * 0.0254).toFixed(2) /*inches to m*/} m
    </TableCell>
  );

  return (
    <React.Fragment>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell width="20%">Wheel Radius:</TableCell>
            <TableCell width="50%">
              {/* <InputLabel title={config.wheel_rad} placement="left" > */}
              <Slider
                id={WHEEL_RAD}
                max={40}
                min={15}
                step={1}
                value={config.wheel_rad}
                valueLabelDisplay="on"
                disabled={readOnly}
                onChange={(e, v) => handleSlider(e, v, WHEEL_RAD)}
              />
              {/* </InputLabel> */}
            </TableCell>
            <TableCell width="30%">
              The larger the wheel radius, the farther the car goes per
              revolution.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wheel Width:</TableCell>
            <TableCell>
              {/* <Tooltip title={config.wheel_width} placement="left" open={true}> */}
              <Slider
                id={WHEEL_WIDTH}
                max={40}
                min={5}
                step={1}
                value={config.wheel_width}
                valueLabelDisplay="on"
                disabled={readOnly}
                onChange={(e, v) => handleSlider(e, v, WHEEL_WIDTH)}
              />
              {/* </Tooltip> */}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tire Tread:</TableCell>
            <TableCell>
              {/* <Tooltip title={Math.floor(config.friction_lim/1e2)} placement="left" open={true}> */}
              <Slider
                id={FRICTION_LIM}
                max={10}
                min={1}
                step={1}
                value={Math.floor(config.friction_lim / 1e2)}
                valueLabelDisplay="on"
                disabled={readOnly}
                onChange={(e, v) => handleSlider(e, v * 1e2, FRICTION_LIM)}
              />
              {/* </Tooltip> */}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Horsepower:</TableCell>
            <TableCell>
              {/* <Tooltip title={Math.floor(config.eng_power/1e3)} placement="left" open={true}> */}
              <Slider
                id={ENG_POWER}
                max={600}
                min={10}
                step={10}
                value={Math.floor(config.eng_power / 1e3)}
                valueLabelDisplay="on"
                disabled={readOnly}
                onChange={(e, v) => handleSlider(e, v * 1e3, ENG_POWER)}
              />
              {/* </Tooltip> */}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Brake Sensitivity:</TableCell>
            <TableCell>
              {/* <Tooltip title={config.brake_scalar} placement="left" open={true}> */}
              <Slider
                id={BRAKE_SCALAR}
                max={2}
                min={0}
                step={0.01}
                value={config.brake_scalar}
                valueLabelDisplay="on"
                disabled={readOnly}
                onChange={(e, v) => handleSlider(e, v, BRAKE_SCALAR)}
              />
              {/* </Tooltip> */}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Steering Sensitivity:</TableCell>
            <TableCell>
              <Tooltip
                title={config.steering_scalar}
                placement="left"
                open={true}
              >
                <Slider
                  id={STEERING_SCALAR}
                  max={2}
                  min={0}
                  step={0.01}
                  value={config.steering_scalar}
                  disabled={readOnly}
                  onChange={(e, v) => handleSlider(e, v, STEERING_SCALAR)}
                />
              </Tooltip>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rear Steering Sensitivity:</TableCell>
            <TableCell>
              <Tooltip
                title={config.rear_steering_scalar}
                placement="left"
                open={true}
              >
                <Slider
                  id={REAR_STEERING_SCALAR}
                  max={2}
                  min={0}
                  step={0.01}
                  value={config.rear_steering_scalar}
                  disabled={readOnly}
                  onChange={(e, v) => handleSlider(e, v, REAR_STEERING_SCALAR)}
                />
              </Tooltip>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Top Speed Limiter:</TableCell>
            <TableCell>
              <Tooltip title={config.max_speed} placement="left" open={true}>
                <Slider
                  id={MAX_SPEED}
                  max={200}
                  min={5}
                  step={1}
                  value={config.max_speed}
                  disabled={readOnly}
                  onChange={(e, v) => handleSlider(e, v, MAX_SPEED)}
                />
              </Tooltip>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Color:</TableCell>
            <TableCell>
              <Tooltip title={config.color} placement="left" open={true}>
                <Slider
                  id={COLOR}
                  max={16777215}
                  min={5}
                  step={1}
                  value={parseInt(config.color, 16)}
                  disabled={readOnly}
                  onChange={(e, v) => handleSlider(e, v, COLOR)}
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
  );
};

export default CarInfo;

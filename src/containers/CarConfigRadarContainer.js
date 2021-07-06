import { connect } from "react-redux";
import CarRadar from "../components/CarRadar.js";
import { calculateCarWeight, calculateCarCost } from "../util/carActions";

function mapStateToProps(state, ownProps) {
  let carConfig;
  if (ownProps.carConfig) {
    carConfig = ownProps.carConfig;
  } else {
    carConfig = state.carConfig;
  }
  let labels;
  let longlabels = [
    "Cost: $" +
      calculateCarCost(carConfig)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
    "Weight: " +
      calculateCarWeight(carConfig)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +
      " lb",
    "Wheel Radius: " + carConfig.wheel_rad + " cm",
    "Wheel Width: " + carConfig.wheel_width + " cm",
    "Tire Tread:" + carConfig.friction_lim,
    "Engine: " + carConfig.eng_power / 1000 + " HP",
    "Brake Sensitivity: " + carConfig.brake_scalar,
    "Steering Sensitivity: " + carConfig.steering_scalar,
    "Rear Steering: " + carConfig.rear_steering_scalar,
    "Top Speed: " + carConfig.max_speed + " MPH",
  ];
  if (ownProps.shortLabels) {
    labels = [
      "Cost",
      "Weight",
      "W Rad",
      "W Width",
      "Tread",
      "Engine",
      "Brakes",
      "Steering",
      "R Steer",
      "Speed",
    ];
  } else {
    labels=longlabels;
  }
  return {
    title: "Current Car",
    showLabels:
      typeof ownProps.showLabels != "undefined" ? ownProps.showLabels : true,
    showTooltips: true,
    fontSize: ownProps.fontSize ? ownProps.fontSize : 16,
    labels: labels,
    longlabels: longlabels,
    values: [
      calculateCarCost(carConfig) / 1e5,
      calculateCarWeight(carConfig) / 5e3,
      (carConfig.wheel_rad - 10) / (80 - 10.0),
      (carConfig.wheel_rad - 5) / (80 - 5.0),
      (carConfig.friction_lim - 100) / (10000 - 1.0),
      (carConfig.eng_power - 10 * 1e3) / ((600 - 10) * 1e3),
      carConfig.brake_scalar / 2.0,
      carConfig.steering_scalar / 2.0,
      carConfig.rear_steering_scalar / 2.0,
      (carConfig.max_speed - 5) / (200 - 5 / 0),
    ],
    height: ownProps.height ? ownProps.height : 100,
    designId: "designId" in ownProps ? ownProps.designId : undefined
  };
}

function mapDispatchToProps(dispatch){
  return {
    handleAxisHover: (e,text,designId)=>{
      dispatch({
        type: "SET_RADAR_TOOLTIP",
        value: {
          id: designId,
          text: text
        }
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CarRadar);

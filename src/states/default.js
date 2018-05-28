import { WHEEL_SIZE, BODY, DRIVETRAIN, ENGINE } from '../actions/carConfig'


let defaultState = {
  dimensions: {
    workspaceHeight: 800,
    workspaceWidth: 1000
  },
  carRacingUrl: "http://racecar.space:5000/",
  carRacingStaticUrl: "http://racecar.space:5000/static/",
  carRacingApiUrl: "http://racecar.space:5000/",
  testDriveVideo: "c2e700ac376f4ee18a68c59a9b6ce5d9.mp4",
  carConfig: {
    hull_poly1: [[-60, 130], [60, 130], [60, 110], [-60, 110]], 
               hull_poly2: [[-15, 120], [15, 120], [20, 20], [-20, 20]],
               hull_poly3: [[25, 20], [50, -10], [50, -40], [20, -90], [-20, -90], [-50, -40], [-50, -10], [-25, 20]], 
               hull_poly4: [[-50, -120], [50, -120], [50, -90], [-50, -90]], 
               hull_densities: [1.2040643615777822, 1.3543495591753878, 1.3917081355952508, 1.146669800908215],
               eng_power: 168491227, 
               wheel_pos: [[-55, 80], [55, 80], [-55, -82], [55, -82]], 
               wheel_width: 14, 
               wheel_rad: 27, 
               wheel_moment: 35205.501730975186, 
               drive_train: [true, false, true, true],  
               friction_lim: 705348.2349731951
  },
  partList: {
    wheel_17: {
      type: WHEEL_SIZE,
      img: '/carIcons/17wheel.png',
      name: '17" Wheel',
      value: 17
    },
    wheel_18: {
      type: WHEEL_SIZE,
      img: '/carIcons/18wheel.png',
      name: '18" Wheel',
      value: 18
    },
    wheel_19: {
      type: WHEEL_SIZE,
      img: '/carIcons/19wheel.png',
      name: '19" Wheel',
      value: 19
    },
    body_rect: {
      type: BODY,
      img: 'carIcons/rect.png',
      value: 'rect'
    },
    body_oval: {
      type: BODY,
      img: 'carIcons/oval.png',
      value: 'oval'
    },
    body_tri: {
      type: BODY,
      img: 'carIcons/tri.png',
      value: 'triangle'
    },
    drivetrain_rwd: {
      type: DRIVETRAIN,
      img: 'carIcons/rwd.png',
      value: 'rwd'
    },
    drivetrain_fwd: {
      type: DRIVETRAIN,
      img: 'carIcons/fwd.png',
      value: 'fwd'
    },
    drivetrain_awd: {
      type: DRIVETRAIN,
      img: 'carIcons/awd.png',
      value: 'awd'
    },
    engine_v3: {
      type: ENGINE,
      img: 'carIcons/v3.png',
      value: 'v3'
    },
    engine_v6: {
      type: ENGINE,
      img: 'carIcons/v6.png',
      value: 'v6'
    },
    engine_v8: {
      type: ENGINE,
      img: 'carIcons/v8.png',
      value: 'v8'
    }
  }

}

export default defaultState;

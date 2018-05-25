import { WHEEL_SIZE, BODY, DRIVETRAIN, ENGINE } from '../actions/carConfig'


let defaultState = {
  dimensions: {
    workspaceHeight: 800,
    workspaceWidth: 1000
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

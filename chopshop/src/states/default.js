import { WHEEL_SIZE } from '../actions/carConfig'


let defaultState = {
	dimensions: {
		workspaceHeight: 800,
		workspaceWidth: 1000
	},

  partList: {
    wheel_16: {
      type: WHEEL_SIZE,
      img: '/carIcons/16wheel.png',
      name: '16" Wheel',
      value: 16
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
    }
  }

}

export default defaultState;

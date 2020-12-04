import { WHEEL_SIZE, BODY, DRIVETRAIN, ENGINE } from '../actions/carConfig'


let defaultState = {
  dimensions: {
    workspaceHeight: 800,
    workspaceWidth: 1000
  },
  carRacingUrl: "http://localhost:5000/",
  carRacingStaticUrl: "http://localhost:5000/static/",
  carRacingApiUrl: "http://localhost:5000/",
  testDriveVideo: "c2e700ac376f4ee18a68c59a9b6ce5d9.mp4",
  numEpisodes: 1,
  carConfig: {
               hull_poly1: [[-60, 130], [60, 130], [60, 110], [-60, 110]],
               hull_poly2: [[-15, 120], [15, 120], [20, 20], [-20, 20]],
               hull_poly3: [[25, 20], [50, -10], [50, -40], [20, -90], [-20, -90], [-50, -40], [-50, -10], [-25, 20]],
               hull_poly4: [[-50, -120], [50, -120], [50, -90], [-50, -90]],
               //hull_densities: [1.2040643615777822, 1.3543495591753878, 1.3917081355952508, 1.146669800908215],
               hull_densities: [1,1,1,1],
               eng_power: 40000,
               wheel_pos: [[-55, 80], [55, 80], [-55, -82], [55, -82]],
               wheel_width: 14,
               wheel_rad: 27,
               wheel_moment: 1.6,
               drive_train: [0, 0, 1, 1],
               friction_lim: 400
  },
  // carConfig:     {
  //               'eng_power': 21142, 
  //               'wheel_moment': 1.8395739953373362, 
  //               'friction_lim': 3473.2965569519306, 
  //               'wheel_rad': 41, 
  //               'wheel_width': 78, 
  //               'drive_train': [true, true, true, true], 
  //               'hull_poly2': [[-50.5, 120], [50.5, 120], [57.5, 20], [-57.5, 20]], 'hull_poly3': [[45.5, 20], [5.5, -10], [26.5, -40], [25.5, -90], [-25.5, -90], [-26.5, -40], [-5.5, -10], [-45.5, 20]], 'hull_poly1': [[-112.5, 130], [112.5, 130], [106.5, 110], [-106.5, 110]], 'hull_poly4': [[-74.0, -120], [74.0, -120], [31.5, -90], [-31.5, -90]], 'hull_densities': [1.502043549258249, 1.609874987044354, 0.8539123396032239, 0.5310562500807439], 'wheel_pos': [[-55, 80], [55, 80], [-55, -82], [55, -82]]
  // },

// carConfig: {'drive_train': [true, true, true, true], "hull_densities": [1,1,1,1], "eng_power": 971853, "wheel_moment": 3.744474240547545, "friction_lim": 2880.0969054748734, "wheel_rad": 13, "wheel_width": 60, "hull_poly2": [[-89.0, 120], [89.0, 120], [62.5, 20], [-62.5, 20]], "hull_poly3": [[14.0, 20], [23.5, -10], [43.0, -40], [19.0, -90], [-19.0, -90], [-43.0, -40], [-23.5, -10], [-14.0, 20]], "hull_poly1": [[-55.0, 130], [55.0, 130], [20.0, 110], [-20.0, 110]], "hull_poly4": [[-123.5, -120], [123.5, -120], [20.0, -90], [-20.0, -90]], "drive_train": [0, 0, 1, 1], "hull_densities": [1, 1, 1, 1], "wheel_pos": [[-55, 80], [55, 80], [-55, -82], [55, -82]]},

  // carConfig: {'eng_power': 112760, 
  //             'wheel_moment': 1.8395739953373362, 
  //             'friction_lim': 3473.2965569519306, 
  //             'wheel_rad': 38, 
  //             'wheel_width': 78, 
  //             'drive_train': [true, true, true, true], 
  //             'hull_poly2': [[-55.0, 120], [55.0, 120], [61.5, 20], [-61.5, 20]], 
  //             'hull_poly3': [[28.0, 20], [12.0, -10], [26.5, -40], [28.0, -90], [-28.0, -90], [-26.5, -40], [-12.0, -10], [-28.0, 20]], 
  //             'hull_poly1': [[-112.5, 130], [112.5, 130], [122.0, 110], [-122.0, 110]], 
  //             'hull_poly4': [[-10.0, -120], [10.0, -120], [5.0, -90], [-5.0, -90]], 
  //             'hull_densities': [1.5044121105907318, 1.609874987044354, 0.7945099416330192, 0.5310562500807439], 
  //             'wheel_pos': [[-55, 80], [55, 80], [-55, -82], [55, -82]]},
  // carConfig: {
  //   eng_power: 5739421, 
  //   wheel_moment: 0.9346604868428174, 
  //   friction_lim: 5749.947627866569, 
  //   wheel_rad: 53, 
  //   wheel_width: 84, 
  //   wheel_pos: [[-89, 90], [38, 90], [-35, -218], [93, -218]], 
  //   drive_train: [true, false, false, true], 
  //   hull_poly1: [[-108.0, 0], [108.0, 0], [-90.0, 149], [90.0, 149]], 
  //   hull_poly2: [[-61.5, 0], [61.5, 0], [-86.0, -224], [86.0, -224]], 
  //   hull_poly3: [[-44, -224], [44, -224], [-44, -259], [44, -259]], 
  //   hull_poly4: [[-232, 149], [232, 149], [-232, 174], [232, 174]], 
  //   hull_densities: [0.769591586126565, 0.12594468828890668, 1.0015631326076992, 1.184446225711888]
  // },
  // carConfig: {
  //           eng_power: 5739421, 
  //           wheel_moment: 0.8368337642298455, 
  //           friction_lim: 5685.587976056577,
  //           wheel_rad: 53, 
  //           wheel_width: 89, 
  //           wheel_pos: [[-89, 90], [38, 90], [-25, -218], [92, -218]], 
  //           drive_train: [true, true, true, true], 
  //           hull_poly1: [[-13.5, 0], [13.5, 0], [-90.0, 149], [90.0, 149]], 
  //           hull_poly2: [[-12.0, 0], [12.0, 0], [-83.0, -224], [83.0, -224]], 
  //           hull_poly3: [[-44, -224], [44, -224], [-44, -259], [44, -259]], 
  //           hull_poly4: [[-232, 149], [232, 149], [-232, 174], [232, 174]], 
  //           hull_densities: [0.730254725379187, 0.1393127191074346, 0.9812314385531492, 1.026264767990794] 
  // },
  testedCars: [],
  gaCars: [{
    config: {
                 hull_poly1: [[-60, 130], [60, 130], [60, 110], [-60, 110]],
                 hull_poly2: [[-15, 120], [15, 120], [20, 20], [-20, 20]],
                 hull_poly3: [[25, 20], [50, -10], [50, -40], [20, -90], [-20, -90], [-50, -40], [-50, -10], [-25, 20]],
                 hull_poly4: [[-50, -120], [50, -120], [50, -90], [-50, -90]],
                 //hull_densities: [1.2040643615777822, 1.3543495591753878, 1.3917081355952508, 1.146669800908215],
                 hull_densities: [1,1,1,1],
                 eng_power: 40000,
                 wheel_pos: [[-55, 80], [55, 80], [-55, -82], [55, -82]],
                 wheel_width: 14,
                 wheel_rad: 27,
                 wheel_moment: 1.6,
                 drive_train: [0, 0, 1, 1],
                 friction_lim: 400
    },
    result: [248.0954887218055,20053.333333333332,4.0],
    video: "e27e16edbeee48e1a381bbda653d11b7.mp4"
  },
  {
  config: {
            eng_power: 5739421, 
            wheel_moment: 0.8368337642298455, 
            friction_lim: 5685.587976056577,
            wheel_rad: 53, 
            wheel_width: 89, 
            wheel_pos: [[-89, 90], [38, 90], [-25, -218], [92, -218]], 
            drive_train: [true, true, true, true], 
            hull_poly1: [[-13.5, 0], [13.5, 0], [-90.0, 149], [90.0, 149]], 
            hull_poly2: [[-12.0, 0], [12.0, 0], [-83.0, -224], [83.0, -224]], 
            hull_poly3: [[-44, -224], [44, -224], [-44, -259], [44, -259]], 
            hull_poly4: [[-232, 149], [232, 149], [-232, 174], [232, 174]], 
            hull_densities: [0.730254725379187, 0.1393127191074346, 0.9812314385531492, 1.026264767990794] 
  },
  result: [611.65,0,0],
  video: ""
},
{
config: {
          eng_power: 5739421, 
          wheel_moment: 0.9346604868428174, 
          friction_lim: 5749.947627866569, 
          wheel_rad: 53, 
          wheel_width: 84, 
          wheel_pos: [[-89, 90], [38, 90], [-35, -218], [93, -218]], 
          drive_train: [true, false, false, true], 
          hull_poly1: [[-108.0, 0], [108.0, 0], [-90.0, 149], [90.0, 149]], 
          hull_poly2: [[-61.5, 0], [61.5, 0], [-86.0, -224], [86.0, -224]], 
          hull_poly3: [[-44, -224], [44, -224], [-44, -259], [44, -259]], 
          hull_poly4: [[-232, 149], [232, 149], [-232, 174], [232, 174]], 
          hull_densities: [0.769591586126565, 0.12594468828890668, 1.0015631326076992, 1.184446225711888]
},
result: [829.699,0,0],
video: ""
}
],
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

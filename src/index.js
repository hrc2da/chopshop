import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import initState from "./states/default.js";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import chopShopReducer from "./reducers/index";
import registerServiceWorker from "./registerServiceWorker";
import { createLogger } from "redux-logger";
import createSocketIoMiddleware from "redux-socket.io";
import io from "socket.io-client";
import thunkMiddleware from "redux-thunk";
import { loadState, saveState } from "./localStorage";
import { getSession } from "./actions/auth";
import { setTestDriveProgress, incrementPracticeProgress } from "./actions/testDrive";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { orange, blue, yellow, green } from "@material-ui/core/colors";
import { Create } from "@material-ui/icons";
let socket = io(initState.carRacingApiUrl);
let socketIoMiddleware = createSocketIoMiddleware(socket, "ga/");
let loggerMiddleware = createLogger();

function socketReducer(state = {}, action) {
  switch (action.type) {
    case "message":
      return Object.assign({}, { message: action.data });
    default:
      return state;
  }
}
let sess = "";
socket.on("session_id", function (sess_id) {
  sess = sess_id;
  socket.emit("start_pipe", sess);
  console.log(sess);
});

function configureStore(preloadedState) {
  return createStore(
    chopShopReducer,
    preloadedState,
    applyMiddleware(loggerMiddleware, thunkMiddleware, socketIoMiddleware)
  );
}
// let store = configureStore(initState);
// store.dispatch({type:'ga/hello', data:'Hello!'});
// socket.on('ga_car', function(data){
//                  console.log("got",data.session_id,"saved",sess);
//                  if(data.session_id==sess){
//                                        console.log("recieved:",data);
//                      store.dispatch({type:'ADD_GA_CAR', newCar:data.car});
//                                    }
//                  //only listen if the car is tagged with your id
//            });
let persistedState = loadState();
let loadedState = Object.assign({}, initState, persistedState);

let store = configureStore(loadedState);
var practest = 0;
store.subscribe(() => {
  let state = store.getState();
  saveState({
    userId: state.userId,
    session: state.session
  });
});
// CAREFUL!! I'm not sure that this .then actually works--if not, this will fail the first time you start a session
store.dispatch(getSession()).then(() => {
  let userId = store.getState().userId;
  socket.on(userId+"_testdrive", function (data) {
    store.dispatch(setTestDriveProgress(data.i));
  });
  socket.on(userId+"_practice", function (data) {
    console.log(practest++);
    store.dispatch(incrementPracticeProgress(data.i));
  });
});

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: blue[300],
    },
    secondary: {
      // This is green.A700 as hex.
      main: orange[500], //'#11cb5f',
    },
    text: {
      primary: blue[900],
      secondary: blue[800],
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

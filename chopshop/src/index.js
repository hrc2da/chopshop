import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import initState from './states/default.js';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import chopShopReducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import { createLogger } from 'redux-logger';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client'

//let socket = io('http://racecar.space:5000');
//let socketIoMiddleware = createSocketIoMiddleware(socket, "ga/");
let loggerMiddleware = createLogger();

function socketReducer(state = {}, action){
    switch(action.type){
            case 'message':
              return Object.assign({}, {message:action.data});
            default:
              return state;
          }
}
let sess = '';
//socket.on('session_id', function(sess_id) {
//                   sess = sess_id;
//                  socket.emit('start_ga', sess);
//                  console.log(sess);
//              });

function configureStore(preloadedState) {
	return createStore(
		chopShopReducer,
		preloadedState,
		applyMiddleware(
			loggerMiddleware,
      //socketIoMiddleware
		)
	);
}
let store = configureStore(initState);
store.dispatch({type:'ga/hello', data:'Hello!'});
//socket.on('ga_car', function(data){
//                  console.log("got",data.session_id,"saved",sess);
//                  if(data.session_id==sess){
//                                        console.log("recieved:",data);
//                      store.dispatch({type:'ADD_GA_CAR', newCar:data.car});
//                                    }
//                  //only listen if the car is tagged with your id
//            });


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();

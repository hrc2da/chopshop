import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import logo from './logo.svg';
import './App.css';

import ViewspaceContainer from './containers/ViewspaceContainer';
import WorkspaceContainer from './containers/WorkspaceContainer';

import { setWorkspaceWidth } from './actions/dimensions.js';
class App extends Component {
resize(props){
	console.log("matt", this);
	let docWidth = document.getElementById("workspace").clientWidth;
	props.resize(docWidth);
}
componentDidMount(){
	this.resize(this.props);
	window.addEventListener("resize", ()=>this.resize(this.props));
}
componentWillUnmount() {
  window.removeEventListener('resize', ()=>this.resize(this.props));
}
render() {
    return (
      <div className="App">
          <Typography variant="display1">Car Racing Workshop</Typography>
	<Grid container spacing={16}>
	    	<Grid item xs={6}>
			<WorkspaceContainer />
		</Grid>
		<Grid item xs={6}>
			<ViewspaceContainer />
		</Grid>
	</Grid>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch){
	return {
		resize: (width) => dispatch(setWorkspaceWidth(width))
	}
}
function mapStateToProps(state){
	return {
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

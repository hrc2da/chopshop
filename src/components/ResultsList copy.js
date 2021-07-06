import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Switch from "@material-ui/core/Switch";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from '@material-ui/core/TablePagination';

import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import { PortableWifiOff } from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";

import CarConfigRadarContainer from "../containers/CarConfigRadarContainer";
import StaticCarContainer from "../containers/StaticCarContainer";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default function ResultsList(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => {
    console.log("Setting page",newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  console.log(props.designIds);
  return (
    <React.Fragment>
      {/* <Grid container spacing={2}>
            
        </Grid> */}
     

      <TableContainer component={Paper}>
        <Table aria-label="results table">
          <TableHead>
            <TableRow>
              <TableCell>Test Drive</TableCell>
              <TableCell>Car</TableCell>
              <TableCell>Design</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Practice?</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.designIds.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((id, listIndex) => {
              let selected = props.activeVideos.indexOf(id) > -1;
              return (<TableRow
                key={id}
                hover
                selected={selected}
                onClick={(e) => props.handleSelectVideo(id,selected)}
              >
                <TableCell>{props.designIds[listIndex+page*rowsPerPage]}</TableCell>
                <TableCell>
                  <svg width={80} height={40}>
                    <StaticCarContainer
                      carConfig={props.testedDesigns[props.designIds[listIndex+page*rowsPerPage]]}
                      width={50}
                      height={80}
                      scale={0.2}
                      rotation={270}
                    />
                  </svg>
                </TableCell>
                <TableCell>
                  <Grid container>
                    <Grid item xs={6}>
                    {/* <div className="chart-container" width={50}> */}
                    <CarConfigRadarContainer
                      carConfig={props.testedDesigns[props.designIds[listIndex]]}
                      showLabels={false}
                      shortLabels={true}
                      fontSize={8}
                      height={60}
                      width={60}
                      designId={props.designIds[listIndex]}
                    />
                  
                  {/* </div> */}
                    </Grid>
                    <Grid item xs={6} style={{"alignSelf":"center", "width":"30px"}}>
                      <div>
                        {props.radarTooltips[props.designIds[listIndex]]}
                      </div>
                    </Grid>  
                  </Grid>
                  
                </TableCell>
                <TableCell>{props.testedRewards[props.designIds[listIndex+page*rowsPerPage]].toFixed(2)}</TableCell>
                <TableCell>No</TableCell>
              </TableRow>
            )})}
          </TableBody>
          <TableFooter>
            <TableRow>
      <TableCell><InputLabel id="sort-results-select-label">Sort by: </InputLabel></TableCell>
            
      <Select
        labelId="sort-results-select-label"
        id="sort-results-select"
        value={props.sortResultsOn}
        onChange={props.handleChangeSort}
      >
        <MenuItem value="time">Time</MenuItem>
        <MenuItem value="wheelRadius">Wheel Radius</MenuItem>
        <MenuItem value="wheelWidth">Wheel Width</MenuItem>
        <MenuItem value="tireTread">Tire Tread</MenuItem>
        <MenuItem value="engineHorsepower">Engine Horsepower</MenuItem>
        <MenuItem value="brakeSensitivity">Brake Sensitivity</MenuItem>
        <MenuItem value="steeringSensitivity">Steering Sensitivity</MenuItem>
        <MenuItem value="rearSteering">Rear Steering Power</MenuItem>
        <MenuItem value="speedLimiter">Speed Limiter</MenuItem>
        <MenuItem value="color">Color</MenuItem>
        <MenuItem value="weight">Weight</MenuItem>
        <MenuItem value="reward">Score</MenuItem>
      </Select>

      
      <ToggleButtonGroup
        value={props.sortResultsOrder}
        exclusive
        onChange={props.handleChangeSortOrder}
        aria-label="sort order"
      >
        <ToggleButton value="ascending" aria-label="ascending">
          <ArrowUpwardIcon />
        </ToggleButton>
        <ToggleButton value="descending" aria-label="descending">
          <ArrowDownwardIcon />
        </ToggleButton>
      </ToggleButtonGroup>

              <TablePagination 
                rowsPerPageOptions={[5,7,10, {label: 'All', value: -1}]}
                count={props.designIds.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {'aria-labe':'rows per page'},
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      {/* <List component='nav'>
            {props.testDrives.map(() => (
                <ListItem>

                </ListItem>
            ))}

        </List> */}
    </React.Fragment>
  );
}

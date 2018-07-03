import axios from "axios";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.jsx";
import Input from "@material-ui/core/Input";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

function getMarathonTime(time){
  switch (time) {
    case 1:
      return "2h 45m";
    case 2:
      return "3h";
    case 3:
      return "3h 15m";
    case 4:
      return "3h 30m";
    case 5:
      return "3h 45m";
    case 6:
      return "4h";
    case 7:
      return "4h 15m";
    case 8:
    return "4h 30m";
  }
}

class MarathonModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { marathonTime: "", f: 0, r: 0 };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  marathonModel = () => {
    const { f, r } = this.state;
    const result = Math.floor(8 - (((f * Math.max(1, 300 - r))/2100)*8));
    const marathonTime = getMarathonTime(result);
    this.setState({ marathonTime })
  };

  render() {
    const { classes } = this.props;
    return <div className={classes.root}>
        <Grid container>
          <GridItem xs={12} sm={12} md={3}>
            <InputLabel>Times per week</InputLabel>
            <Input name="f" value={this.state.f} onChange={this.handleChange} />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InputLabel>Avarage Speed (s/km)</InputLabel>
            <Input name="r" value={this.state.r} onChange={this.handleChange} />
          </GridItem>
        </Grid>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.marathonModel}>
          Get Results
        </Button>
        <div style={{ marginTop: "15px", marginLeft: "15px" }}>
          <Typography variant="title" gutterBottom>
            Your marathon time will be: {this.state.marathonTime}
          </Typography>
        </div>
      </div>;
  }
}

export default withStyles(styles)(MarathonModel);

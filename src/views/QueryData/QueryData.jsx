import axios from 'axios';
import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withRouter } from "react-router-dom";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";

import Input from "@material-ui/core/Input";
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
  }
});

class QueryData extends React.Component {
  constructor(props) { 
    super(props)
    this.state = {
      gender: "female",
      city: "Herzo",
      age: "30-40",
      data: {}
    };
  }
  
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidUpdate () {
    const { age, city, gender } = this.state;
    const [ _from, to] = age.split("-")
    axios.get(`https://adiflask.herokuapp.com/users_info/?age_to=${to}&age_from=${_from}&city=${city}&gender=${gender}`)
      .then(res => {
        console.log(res)
      });
  }

  render() {
    const { classes } = this.props;
    return <div className={classes.root}>
        <FormControl component="fieldset" required error className={classes.formControl}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup aria-label="gender" name="gender" className={classes.group} value={this.state.gender} onChange={this.handleChange}>
            <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
            <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
            <FormControlLabel value="all" control={<Radio color="primary" />} label="All" />
          </RadioGroup>
        </FormControl>

        <FormControl className={classes.formControl}>
          <FormLabel component="legend">City</FormLabel>
          <Select value={this.state.city} name="city" onChange={this.handleChange}>
            <MenuItem value="Herzo">Herzo</MenuItem>
            <MenuItem value="Barcelona">Barcelona</MenuItem>
            <MenuItem value="Madrid">Madrid</MenuItem>
            <MenuItem value="Sofia">Sofia</MenuItem>
            <MenuItem value="Amsterdam">Amsterdam</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormLabel component="legend">Age</FormLabel>
          <Select value={this.state.age} name="age" onChange={this.handleChange}>
            <MenuItem value="5-10">5 - 10</MenuItem>
            <MenuItem value="10-20">10 - 20</MenuItem>
            <MenuItem value="20-30">20 - 30</MenuItem>
            <MenuItem value="30-40">30 - 40</MenuItem>
            <MenuItem value="40-50">40 - 50</MenuItem>
            <MenuItem value="50-60">50 - 60</MenuItem>
            <MenuItem value="60-70">60 - 70</MenuItem>
            <MenuItem value="70-80">70 - 80</MenuItem>
            <MenuItem value="80-90">80 - 90</MenuItem>
          </Select>
        </FormControl>
      </div>;
  }
}

export default withStyles(styles)(QueryData);

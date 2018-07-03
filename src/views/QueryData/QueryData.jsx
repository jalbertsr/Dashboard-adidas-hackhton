import axios from 'axios';
import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Blockchain from "../../utils/blockchain.js";

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

class QueryData extends React.Component {
  constructor(props) { 
    super(props)
    this.state = {
      gender: "female",
      city: "Herzo",
      age: "30-40",
      matches: 0
    };
    this.blockchain = new Blockchain();
  }
  
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleQuery = () => {
    const { age, city, gender } = this.state;
    const [ _from, to] = age.split("-")
    axios
      .get(
        `https://adiflask.herokuapp.com/users_info?age_to=${to}&age_from=${_from}&sex=${gender}&city=${city}`
      )
      .then(res => {
        console.log(res.data["number_of_matching_users"]);
        this.setState({ matches: res.data["number_of_matching_users"] || 0 });
      });
      
      this.blockchain.queryData("0xe76d6685bab09f2200d28b03bf148d57550c300f", "0x9d0f6deaa4f3484b821e66df45bf0746bffe7c3c", "0x6916928862e02243b20ce0d9a17089c09d157a58");
  }

  render() {
    const { classes } = this.props;
    return <div className={classes.root}>
        <Grid container>
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
        </Grid>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleQuery}>
          Query Results
        </Button>
        <div style={{ marginTop: "15px", marginLeft: "15px" }}>
          <Typography variant="title" gutterBottom>
            Results: {this.state.matches}
          </Typography>
        </div>
      </div>;
  }
}

export default withStyles(styles)(QueryData);

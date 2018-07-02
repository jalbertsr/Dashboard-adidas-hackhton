import React from "react";
import axios from 'axios';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";

import Web3 from 'web3';

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLogin: true
    };
  }
  componentDidMount() {
    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    console.log(web3);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSumbit = () => {
    if (this.state.isLogin) {
      // axios POST call login
    }
    else {
      axios
        .post("https://adiflask.herokuapp.com/create_user", {
          email: this.state.email,
          password: this.state.password,
        })
        .then(response => {
          console.log(response.data.private_key);
        });
    }
  }
  render() {
    const { classes } = this.props;
    const { isLogin} = this.state;
    return <div>
        <Grid container>
          <GridItem xs={12} sm={12} md={2} />
          <GridItem xs={12} sm={12} md={7}>
            <Card>
              {isLogin && <CardHeader color="info">
                  <h4 className={classes.cardTitleWhite}>Login</h4>
                </CardHeader>}
              {!isLogin && <CardHeader color="success">
                  <h4 className={classes.cardTitleWhite}>Register</h4>
                </CardHeader>}
              <CardBody>
                <Grid container>
                  <GridItem xs={12} sm={12} md={6}>
                    <FormControl className={classes.margin}>
                      <InputLabel htmlFor="input-with-icon-adornment">
                        Email
                      </InputLabel>
                      <Input id="input-with-icon-adornment" name="email" value={this.state.email} onChange={this.handleChange} />
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField className={classes.margin} id="input-with-icon-textfield" label="Password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                  </GridItem>
                </Grid>
              </CardBody>
              <CardFooter>
                <Button color={isLogin ? "info" : "success"} onClick={this.handleSumbit}>
                  {isLogin ? "Login" : "Register"}
                </Button>
                {isLogin && <Button color="success" onClick={() => {
                      this.setState({ isLogin: false });
                    }}>
                    Create a new account
                  </Button>}
              </CardFooter>
            </Card>
          </GridItem>
        </Grid>
      </div>;
  }
}

export default withStyles(styles)(Login);

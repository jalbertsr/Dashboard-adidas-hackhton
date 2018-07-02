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

import Blockchain from '../../utils/blockchain.js'

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
    console.log('mounting')
    const blockchain = new Blockchain()
    const key = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAo2THzYQI3yCgyfz3DVcORoW2uToS9xLTcmLk8X6tiQdqzr/X
CU2QXjvqSzi9qeWB5Eyx8MtviM2Y+1SPpFIbN5qtIjFzwgov2CbA4rcQk9756bdu
R8GmJR1tkVOrt+fLT/DJelpSYNjoT9YKWID9gGQ28jtEKrdwBg/IeYEVg3ib+Q3m
Blr1rDui4nrlnHhYDVa59sMKJKB5dACzVAMPfa23Vy/7fF30i3vQtR4MSis6/MiB
DFAmhvCYSauA99ripVXzIrzBjGpHCCo/toV1+vEANHQv9BuJOLEi32oUpJHkmaQd
lQhk9tLZm2MU5pwSpaF3z/pz3tpsMnBUoncizQIDAQABAoIBADuIsgBg9naOReez
AzVaHfp2KADPdy+NLXwFKpQPax19lV4lqi1alJqxTAoCb6Di3fQYOdGZ3lbDStVw
lzHxNLeK5UCLMjlmSs6AOFGjEChA22BcFJOSrH3jfhOwn+XPUFYdTtwE4vUks2i7
fWOIBFXurdKO46SI2AltYMdc0EDpcSe1pGP1to88MTv65z2x1zCAhWWWAInaMOho
JxZe8joJEJ/Zc56NBjCfCQKUZAEHl3mBWBpneJr0XoFP+5NmgjapEFgVKuDAkwgO
wMP73RBfA1u0c6NcCKATAtttjxQuOa6OPuIUKmzw9u1JFWwBwuULkjaMmhJ4Z6v7
cubLrIECgYEAyt276dd8svRQelDGFLnXIpWtV6T0phcBU+VQaLdyZ6EhqSoVHXRG
30a1ShAh7+ME4PBv4gXbOJkOvj93dWcHDR1YhaMDttQtqgkglRO0JkXm6afx7wMM
s38ViJWlY0HkECjDpy6S/VdHP218M9FK+XPqRW+Hud8iPXx23Dnry6ECgYEAzjBm
PEaaTqE0PI+7cyBOHSNxW9JX5LbO5jwCg5josBWhvH73sAdrKGB0N1uxlcHGv+0Y
5AbFsD+VyIaO8oSdnORQVLuEeobibBTgz9F6aKFdtmtRytggBTS3vA2/0f1t51gJ
pZQg2xWOBsyGhkneJuW44I4RGNgk6RNcgnN5J60CgYEAggu6lqEI0z9DB+YX1Nl9
TDJfOLwKCR7ePwXVkgtnT38/sM3FU2hitmcBeET3PGxviDMZxe6zJYkYpmTRE3XE
U2fog2KI0v8ZdtL7DBXheld9O3Pp56owzjA9gZ1MtGBc7u7y3Y1BtR3qEoMBB8a3
JUpld7WTcFfV/0x2dZ67xYECgYEAptJB5UK6ViPXP6iK4PqiOLEUZlYpBsNhYqXq
4s40dUMLOJcBj0pxSJnBbYiihafiRiZunQ9dotvPNA6qWU0yuF2BIQ0WgovfZdL+
kSXLBByK1ay+4H88aPneLihxqlSBN0vjgjP24UrvPlD8Bmp9crsqeYR4EMHQG0Ou
9Vy4CYECgYBRZrAWrt+p0nQ9mdNaWJC+e0ycp+2q90gWeLFkH3l1ha68FeJ3Ta9v
ENPe9/pAzbin/e1wQui9KnOmSUQjaqrtcgGoQL2YJCPtQ6LF2gAFicBHPsDyLe6d
p7mdTGPlnRzZCV0BgPq7epG+3cG9shqcO0zCW8iXCARrgnz8y5Br4g==
-----END RSA PRIVATE KEY-----`
                console.log(blockchain.createDataholder("Thomas", "test", key))
                /* console.log(blockchain.getKeyFromDataholder('Thomas')) */
    

    /* const web3 = new Web3(new Web3.providers.HttpProvider("http://54.246.178.196:8545"));
     * var coinbase = web3.eth.coinbase; */
    /* console.log(coinbase) */
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
          public_key: "1231231313_public_key"
        })
        .then(response => {
          console.log(response);
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

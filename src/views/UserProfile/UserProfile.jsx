import React from "react";
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
import AttachMoney from "@material-ui/icons/AttachMoney";
import CardIcon from "components/Card/CardIcon.jsx";
import DateRange from "@material-ui/icons/DateRange";

import avatar from "assets/img/faces/marc.jpg";

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

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
  }
  handleChange = e => {
    console.log(e.target.checked);
    this.setState({ checked: e.target.checked });
  };
  render() {
    const { classes } = this.props;
    return <div>
        <Grid container>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                <p className={classes.cardCategoryWhite}>
                  Complete your profile
                </p>
              </CardHeader>
              <CardBody>
                <Grid container>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput labelText="Username" id="username" formControlProps={{ fullWidth: true }} />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput labelText="Email address" id="email-address" formControlProps={{ fullWidth: true }} />
                  </GridItem>
                </Grid>
                <Grid container>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput labelText="First Name" id="first-name" formControlProps={{ fullWidth: true }} />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput labelText="Last Name" id="last-name" formControlProps={{ fullWidth: true }} />
                  </GridItem>
                </Grid>
                <Grid container>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput labelText="City" id="city" formControlProps={{ fullWidth: true }} />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput labelText="Country" id="country" formControlProps={{ fullWidth: true }} />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput labelText="Postal Code" id="postal-code" formControlProps={{ fullWidth: true }} />
                  </GridItem>
                </Grid>
              </CardBody>
              <CardFooter>
                <Button color="primary">Update Profile</Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Your Balance</h4>
                <p className={classes.cardCategoryWhite}>
                  Look your adidasium grow
                </p>
              </CardHeader>
              <CardBody>
                <Grid container>
                  <GridItem xs={12} sm={6} md={6}>
                    <Card>
                      <CardHeader color="success" stats icon>
                        <CardIcon color="success">
                          <AttachMoney />
                        </CardIcon>
                        <p className={classes.cardCategory}>Balance</p>
                        <h3 className={classes.cardTitle}>34245</h3>
                      </CardHeader>
                      <CardFooter stats>
                        <div className={classes.stats}>
                          <DateRange />
                          Last 24 Hours
                        </div>
                      </CardFooter>
                    </Card>
                  </GridItem>
                </Grid>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </div>;
  }
}

export default withStyles(styles)(UserProfile);

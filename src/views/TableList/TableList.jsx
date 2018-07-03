import React from "react";
import axios from "axios";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class TableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    const id = localStorage.getItem("userId");
    axios
      .get(`https://adiflask.herokuapp.com/approved_data_scientists/${id}`)
      .then(res => console.log(res));
    // list of companies that request data
  }
  handleChange = e => {
      // make pay 
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Data Table</h4>
              <p className={classes.cardCategoryWhite}>
                Companies and organitzations you're shearing data with.
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["Name", "Country", "Shared"]}
                tableData={[
                  [
                    "Marco Polo",
                    "World",
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.marco}
                          onChange={this.handleChange}
                          value="true"
                          name="marco"
                        />
                      }
                    />
                  ],
                  [
                    "HealtCare Lab",
                    "USA",
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.health}
                          onChange={this.handleChange}

                        />
                      }
                    />
                  ],
                  [
                    "Sage Rodriguez",
                    "Netherlands",
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked="true"
                          onChange={this.handleChange}
                        />
                      }
                    />
                  ]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    );
  }
}

export default withStyles(styles)(TableList);

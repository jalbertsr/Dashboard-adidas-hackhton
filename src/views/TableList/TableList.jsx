import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

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
  constructor (props){
    super(props)
    this.state = {}
  }
  componentDidMount () {
    // list of companies that request data
  }
  render () {
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
                  ["Dakota Rice", "Niger", "Yes - ✅"],
                  ["Minerva Hooper", "Curaçao", "No - ❌"],
                  ["Sage Rodriguez", "Netherlands", "Yes - ✅"],
                  ["Philip Chaney", "Korea, South", "Yes - ✅"],
                  ["Doris Greene", "Malawi", "No - ❌"],
                  ["Mason Porter", "Chile", "Yes - ✅"]
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

import React from "react";
import { withRouter } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Quote from "components/Typography/Quote.jsx";
import Muted from "components/Typography/Muted.jsx";
import Primary from "components/Typography/Primary.jsx";
import Info from "components/Typography/Info.jsx";
import Success from "components/Typography/Success.jsx";
import Warning from "components/Typography/Warning.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    minHeight: 200
  },
  unstayledCard: {
    minWidth: 275,
    minHeight: 200,
    backgroundColor: "lightgrey",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class SimpleCard extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { classes } = this.props;
    return ( 
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="headline" component="h2">
              Runtastic
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Data from our sport social network
            </Typography>
            <Typography component="p">
              well meaning and kindly.<br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => this.props.history.push("/queryData")}>
              Go
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

function UnstyledSimpleCard(props) {
  const { classes } = props;

  return <div>
      <Card className={classes.unstayledCard} />
    </div>;
}

const SimpleStayledCard = withStyles(styles)(withRouter(SimpleCard));
const SimpleUnstayledCard = withStyles(styles)(UnstyledSimpleCard);


const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
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
function DataMarket(props) {
  const { classes } = props;
  return <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Data Marketplace</h4>
        <p className={classes.cardCategoryWhite}>
          Find the kind of data you're looking for.
        </p>
      </CardHeader>
      <CardBody>
        <Grid container>
          <GridItem xs={12} sm={12} md={4}>
            <SimpleStayledCard />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <SimpleStayledCard />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <SimpleUnstayledCard/>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <SimpleUnstayledCard/>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <SimpleUnstayledCard/>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <SimpleUnstayledCard/>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <SimpleUnstayledCard/>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <SimpleUnstayledCard/>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <SimpleUnstayledCard/>
          </GridItem>
        </Grid>
      </CardBody>
    </Card>;
}

export default withStyles(style)(DataMarket);

import React from "react";
import classNames from "classnames";
import { Manager, Target, Popper } from "react-popper";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import AccountBalance from "@material-ui/icons/AccountBalance";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle";

class HeaderLinks extends React.Component {
  state = {
    open: false
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return <div>
        <Manager className={classes.manager}>
          <Target>
            <Button color={window.innerWidth > 959 ? "transparent" : "white"} justIcon={window.innerWidth > 959} simple={!(window.innerWidth > 959)} aria-label="Notifications" aria-owns={open ? "menu-list" : null} aria-haspopup="true" onClick={this.handleClick} className={classes.buttonLink}>
              <Notifications className={classes.icons} />
              <span className={classes.notifications}>2</span>
              <Hidden mdUp>
                <p onClick={this.handleClick} className={classes.linkText}>
                  Notification
                </p>
              </Hidden>
            </Button>
          </Target>
          <Popper placement="bottom-start" eventsEnabled={open} className={classNames(
                { [classes.popperClose]: !open }
              ) + " " + classes.pooperResponsive}>
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow in={open} id="menu-list" style={{ transformOrigin: "0 0 0" }}>
                <Paper className={classes.dropdown}>
                  <MenuList role="menu">
                    <MenuItem onClick={this.handleClose} className={classes.dropdownItem}>
                      ONG XXX wants your data.
                    </MenuItem>
                    <MenuItem onClick={this.handleClose} className={classes.dropdownItem}>
                      Health company XXX wants your data.
                    </MenuItem>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
        <Button color={window.innerWidth > 959 ? "transparent" : "white"} justIcon={window.innerWidth > 959} simple={!(window.innerWidth > 959)} aria-label="Person" className={classes.buttonLink}>
          <AccountBalance className={classes.icons} />
          <span className={classes.notifications}>3k</span>
          <Hidden mdUp>
            <p className={classes.linkText}>123 Adidasium</p>
          </Hidden>
        </Button>
        <Button color={window.innerWidth > 959 ? "transparent" : "white"} justIcon={window.innerWidth > 959} simple={!(window.innerWidth > 959)} aria-label="Person" className={classes.buttonLink}>
          <Person className={classes.icons} />
          <Hidden mdUp>
            <p className={classes.linkText}>Profile</p>
          </Hidden>
        </Button>
      </div>;
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);

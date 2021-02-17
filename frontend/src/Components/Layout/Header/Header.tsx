import React from 'react';
import moonPayLogo from '../../../Assets/Logo/black-mp-logo.svg';
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import { useStyles } from './Header.styles';

const Header: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={2}>
              <img src={moonPayLogo} alt="MoonPay Logo" height={30} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

export default Header;

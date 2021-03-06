import React, { useState } from 'react';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Deposits from './components/Deposits';
import Orders from './components/Orders';
import { useDashboardPageStyles } from './DashboardPage.styles';
import Chart from './components/Chart';

export const DashboardPage = () => {
  const classes = useDashboardPageStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <Chart />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Deposits />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Orders />
        </Paper>
      </Grid>
    </Grid>
  );
};

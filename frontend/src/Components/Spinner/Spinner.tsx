import React from 'react';
import { Backdrop, CircularProgress, Typography } from '@material-ui/core';
import { useStyles } from './Spinner.styles';

const Spinner = ({ open }: { open: boolean }) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress color="inherit" />
      <Typography variant="body2" className={classes.message}>
        Loading awesome content...
      </Typography>
    </Backdrop>
  );
};

export default Spinner;

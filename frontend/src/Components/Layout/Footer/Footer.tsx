import React from 'react';
import { useStyles } from './Footer.style';

const Footer: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      © MoonPay - Test developed by Pedro Eliseo Puga Lombardo
    </div>
  );
};

export default Footer;

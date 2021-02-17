import React, { Dispatch, SetStateAction, FC, ChangeEvent } from 'react';
import {
  Button,
  ButtonGroup,
  FormControlLabel,
  Switch,
  Grid,
  Typography,
} from '@material-ui/core';
import { ICurrency } from '../../Models/Models';
import { useStyles } from './CurrenciesFilter.style';

const CurrenciesFilters: FC<{
  currencies: ICurrency[];
  setCurrencies: Dispatch<SetStateAction<ICurrency[]>>;
  setSupportedUSToggle: Dispatch<SetStateAction<boolean>>;
  setSupportedTestToggle: Dispatch<SetStateAction<boolean>>;
}> = ({
  currencies,
  setCurrencies,
  setSupportedUSToggle,
  setSupportedTestToggle,
}) => {
  const classes = useStyles();
  const randomizeCurrencies = (): ICurrency[] => {
    const randomizedCurrencies: ICurrency[] = currencies.slice(0);
    return randomizedCurrencies.sort(() => 0.5 - Math.random());
  };
  const orderCurrencies = (type: string): ICurrency[] => {
    const orderedCurrencies: ICurrency[] = currencies.slice(0);
    return orderedCurrencies.sort((a: ICurrency, b: ICurrency) => {
      if (a[type] < b[type]) {
        return -1;
      }
      if (a[type] > b[type]) {
        return 1;
      }
      return 0;
    });
  };

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Typography>Filter</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justify="space-around"
        className={classes.root}
        spacing={3}
      >
        <Grid item md={3} xs={12} className={classes.column}>
          <FormControlLabel
            control={
              <Switch
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSupportedUSToggle(e.target.checked)
                }
                disableRipple
                name="usSupported"
                color="primary"
              />
            }
            label="US Supported"
          />
        </Grid>
        <Grid item md={3} xs={12} className={classes.column}>
          <ButtonGroup color="primary" className={classes.buttonGroup}>
            <Button onClick={() => setCurrencies(orderCurrencies('name'))}>
              Name
            </Button>
            <Button onClick={() => setCurrencies(orderCurrencies('code'))}>
              Code
            </Button>
            <Button onClick={() => setCurrencies(randomizeCurrencies())}>
              Random
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item md={3} xs={12} className={classes.column}>
          <FormControlLabel
            control={
              <Switch
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSupportedTestToggle(e.target.checked)
                }
                name="testMode"
                color="primary"
              />
            }
            label="Test Mode Available"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CurrenciesFilters;

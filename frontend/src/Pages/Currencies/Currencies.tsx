import React, { useContext, useEffect, useState } from 'react';
import CurrenciesService from '../../Services/Currencies';
import CurrenciesFilters from '../../Components/CurrenciesFilter/CurrenciesFilter';
import CurrencyCard from '../../Components/CurrencyCard/CurrencyCard';
import { Typography, Grid, Container } from '@material-ui/core';
import { AppContext } from '../App/AppContextProvider';
import { ICurrency } from '../../Models/Models';
import { useStyles } from './Currencies.style';

const Currencies: React.FC<{}> = () => {
  const { setLoading } = useContext(AppContext);
  const [currencies, setCurrencies] = useState<ICurrency[]>([]);
  const [supportedUSToggle, setSupportedUSToggle] = useState<boolean>(false);
  const [supportedTestToggle, setSupportedTestToggle] = useState<boolean>(
    false
  );
  const classes = useStyles();
  const fetchCurrencies = async () => {
    setLoading(true);
    setCurrencies(await CurrenciesService.getCurrenciesData());
    setLoading(false);
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <Container>
      <Grid container spacing={3} className={classes.cards}>
        <Grid item xs={12}>
          <CurrenciesFilters
            currencies={currencies}
            setCurrencies={setCurrencies}
            setSupportedUSToggle={setSupportedUSToggle}
            setSupportedTestToggle={setSupportedTestToggle}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Currencies</Typography>
        </Grid>
        {currencies
          .filter((currency) =>
            supportedUSToggle ? currency.isSupportedInUS : true
          )
          .filter((currency) =>
            supportedTestToggle ? currency.supportsTestMode : true
          )
          .map((currency) => (
            <Grid item lg={4} md={6} sm={6} xs={12} key={currency.id}>
              <CurrencyCard {...currency} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Currencies;

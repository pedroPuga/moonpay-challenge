import React, { useState } from 'react';
import moment from 'moment';
import CurrencyDialog from './CurrencyDialog';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
  CardHeader,
} from '@material-ui/core';
import { ICurrency } from '../../Models/Models';
import { useStyles } from './CurrencyCard.style';

const CurrencyCard: React.FC<ICurrency> = (currency) => {
  const classes = useStyles();
  const [openDetailModal, setOpenDetailModal] = useState<boolean>(false);
  const { type, name, code, createdAt, updatedAt } = currency;
  return (
    <Card className={classes.root}>
      <CurrencyDialog
        open={openDetailModal}
        setOpen={setOpenDetailModal}
        currency={currency}
      />
      <CardHeader title={name} className={classes.header} />
      <Divider variant="middle" />
      <CardContent>
        <div className={classes.list}>
          <Typography className={classes.listItem}>
            <b>Code:</b> <span>{code}</span>
          </Typography>
          <Typography className={classes.listItem}>
            <b>Type:</b> <span>{type}</span>
          </Typography>
          <Typography className={classes.listItem}>
            <b>Created:</b>{' '}
            <span>{moment(createdAt).format('YYYY/MM/DD')}</span>
          </Typography>
          <Typography className={classes.listItem}>
            <b>Updated:</b>{' '}
            <span>{moment(updatedAt).format('YYYY/MM/DD')}</span>
          </Typography>
        </div>
      </CardContent>
      <Divider variant="middle" />
      <CardActions className={classes.action}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => setOpenDetailModal(true)}
        >
          View more
        </Button>
      </CardActions>
    </Card>
  );
};

export default CurrencyCard;

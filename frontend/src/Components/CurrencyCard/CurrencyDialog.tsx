import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
} from '@material-ui/core';
import { ICurrency } from '../../Models/Models';

const CurrencyDialog: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currency: ICurrency;
}> = ({ open, setOpen, currency }) => {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Currency Metadata</DialogTitle>
        <DialogContent>
          {Object.keys(currency).map((key: string) => (
            <Typography key={key}>
              <b>{key}: </b> <span>{currency[key]}</span>
            </Typography>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CurrencyDialog;

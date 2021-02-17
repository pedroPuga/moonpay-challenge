import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      borderRadius: 12,
      minWidth: 256,
      textAlign: 'center',
    },
    header: {
      textAlign: 'center',
      spacing: 10,
    },
    list: {
      padding: '20px',
    },
    listItem: {
      textAlign: 'left',
      width: '50%',
      margin: '0 auto',
    },
    button: {
      margin: spacing(1),
    },
    action: {
      display: 'flex',
      justifyContent: 'space-around',
    },
  })
);

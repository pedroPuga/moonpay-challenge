import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      border: '1px solid #ddd',
      background: '#fff',
      borderRadius: '5px',
      marginTop: spacing(1),
    },
    buttonGroup: {
      marginLeft: spacing(2),
    },
    sort: {
      display: 'inline',
    },
    column: {
      textAlign: 'center',
    },
  })
);

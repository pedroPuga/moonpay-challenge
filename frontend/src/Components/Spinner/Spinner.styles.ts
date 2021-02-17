import { Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ zIndex }: Theme) =>
  createStyles({
    backdrop: {
      zIndex: zIndex.drawer + 1,
      color: '#fff',
    },
    message: {
      marginLeft: '8px',
    },
  })
);

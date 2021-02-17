import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: 'rgba(255, 255, 255)',
      color: 'black',
    },
    headerLink: {
      textDecoration: 'inherit',
      color: 'inherit',
    },
  })
);

import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: 'fixed',
      left: 0,
      width: '100%',
      bottom: 0,
      backgroundColor: 'rgb(17, 17, 17)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      minHeight: 50,
    },
  })
);

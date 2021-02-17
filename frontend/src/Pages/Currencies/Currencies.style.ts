import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    cards: {
      marginBottom: spacing(6),
    },
  })
);

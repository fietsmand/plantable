import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    // padding: theme.spacing(5),
    minHeight: '100vh',
    padding: theme.spacing(7),
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
}));

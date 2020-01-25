import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  root: {
    background: theme.background('primary', 'concave'),
    minHeight: '100vh',
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  chartContainer: {
    boxShadow: theme.shadow('primary', 5, true),
    padding: 5,
    borderRadius: 5,
    margin: theme.spacing(2),
  },
}));

import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  root: {
    background: theme.background('cardColor', 'concave'),
    minHeight: 'calc(100vh - 40px)',
    padding: theme.spacing(2),
    display: 'flex',
    // justifyContent: 'center',
    // alignContent: 'center',
    flexDirection: 'column',
  },
  chartContainer: {
    boxShadow: theme.shadow('cardColor', 5, true),
    padding: 5,
    borderRadius: 5,
    background: theme.background('cardColor', 'concave'),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(2),
    },
    marginBottom: theme.spacing(2),
  },
}));

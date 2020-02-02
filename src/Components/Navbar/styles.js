import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  root: {
    width: '100%',
    height: 50,
    marginBottom: theme.spacing(2),
  },
}));

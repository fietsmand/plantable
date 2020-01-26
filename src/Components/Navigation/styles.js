import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  root: {
    height: '80vh',
    width: '30vw',
    marginRight: theme.spacing(2),
  },
}));

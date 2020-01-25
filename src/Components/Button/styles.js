import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  root: (color) => ({
    borderRadius: 100,
    border: `1px solid ${theme.palette.primary.lightBorder}`,
    background: theme.background(color, 'concave'),
    boxShadow: theme.shadow('primary', 7),
    height: 50,
    width: 50,
  }),
}));

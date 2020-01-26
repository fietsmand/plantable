import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    height: '100%',
    width: '-webkit-fill-available',
    borderRadius: 12,
    border: `1px solid ${theme.palette.cardColor.lightBorder}`,
    background: theme.background('cardColor', 'concave'),
    boxShadow: theme.shadow('cardColor', 4),
  },
}));

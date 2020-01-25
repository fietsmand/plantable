import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    height: '100%',
    width: '-webkit-fill-available',
    borderRadius: 12,
    border: `1px solid ${theme.palette.primary.lightBorder}`,
    background: `linear-gradient(145deg, ${theme.palette.primary.lightShade}, ${theme.palette.primary.darkShade})`,
    boxShadow: theme.shadow('primary', 4),
  },
}));

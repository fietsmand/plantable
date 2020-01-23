import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
    width: '70%',
    borderRadius: 12,
    border: `1px solid ${theme.palette.primary.lightBorder}`,
    background: `linear-gradient(145deg, ${theme.palette.primary.lightShade}, ${theme.palette.primary.darkShade})`,
    boxShadow: `5px 5px 10px ${theme.palette.primary.dark}, -5px -5px 10px ${theme.palette.primary.light}`,
  },
}));

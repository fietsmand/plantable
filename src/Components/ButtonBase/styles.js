import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  root: ({ color, backgroundColor }) => ({
    border: `1px solid ${theme.palette.primary.lightBorder}`,
    background: theme.background(color, 'concave'),
    boxShadow: theme.shadow(backgroundColor, 7),
    transition: 'box-shadow 0.2s ease-in-out',
    '&:hover': {
      boxShadow: `${theme.shadow(backgroundColor, 4)}`,
    },
    '&:active': {
      boxShadow: `${theme.shadow(backgroundColor, 7)}, ${theme.singleShadow(color, 3, true)}`,
    },
  }),
}));

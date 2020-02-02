import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  root: ({ color, backgroundColor }) => ({
    border: '1px solid',
    background: theme.background(color, 'convex'),
    boxShadow: theme.shadow(backgroundColor, 4),
    borderColor: 'transparent',
    transition: 'box-shadow 0.2s ease-in-out, border-color 0.4s ease-in-out',
    '&:hover': {
      borderColor: theme.palette[color].lightBorder,
      boxShadow: `${theme.shadow(backgroundColor, 4)}`,
    },
    '&:active': {
      boxShadow: `${theme.shadow(backgroundColor, 4)}, ${theme.singleShadow(color, 3, true)}`,
    },
  }),
}));

import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => ({
  buttonRoot: ({ shape }) => {
    const borderRadius = () => {
      switch (shape) {
        case 'square':
          return 5;
        case 'stadium':
          return 100;
        case 'round':
          return 100;
        default:
          return 5;
      }
    };
    return {
      borderRadius: borderRadius(),
      height: 50,
      width: 50,
    };
  },
}));

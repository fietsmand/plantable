import Color from 'color';

export const theme = {
  palette: {
    primary: {
      main: '#2D4700',
    },
    secondary: {
      main: '#638468',
    },
    tertriary: {
      main: '#7A1F0C',
    },
    cardColor: {
      main: '#EFEEEE',
    },
  },
  shadow: (color, distance, inset) => `${inset ? 'inset' : ''} ${distance}px ${distance}px ${distance * 2}px ${theme.palette[color].dark}, 
  ${inset ? 'inset' : ''} ${-distance}px ${-distance}px ${distance * 2}px ${theme.palette[color].light}`,
  background: (color, shape) => {
    switch (shape) {
      case 'concave':
        return `linear-gradient(145deg, ${theme.palette[color].lightShade}, ${theme.palette[color].darkShade})`;
      case 'convex':
        return `linear-gradient(225deg, ${theme.palette[color].lightShade}, ${theme.palette[color].darkShade})`;
      default:
        return theme.palette[color].main;
    }
  },
  spacing: (v) => v * 10,
};

const augmentShades = (color) => {
  const mainColor = theme.palette[color].main;
  const light = Color(mainColor).lighten(0.15).hex();
  const dark = Color(mainColor).darken(0.15).hex();
  const lightBorder = Color(mainColor).lighten(0.12).hex();
  const lightShade = Color(mainColor).lighten(0.10).hex();
  const darkShade = Color(mainColor).darken(0.10).hex();

  theme.palette[color] = {
    ...theme.palette[color],
    light,
    dark,
    lightShade,
    darkShade,
    lightBorder,
  };
};

augmentShades('primary');
augmentShades('secondary');
augmentShades('tertriary');
augmentShades('cardColor');

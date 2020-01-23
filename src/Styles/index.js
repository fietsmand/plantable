import Color from 'color';

export const theme = {
  palette: {
    primary: {
      main: '#293932',
    },
    secondary: {
      main: '#638468',
    },
    tertriary: {
      main: '#a6736b',
    },
    cardColor: {
      main: '#EFEEEE',
    },
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

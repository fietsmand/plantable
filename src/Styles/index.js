import Color from 'color';

// The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm[.
const breakPoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const breakpointKeys = ['xs', 'sm', 'md', 'lg', 'xl'];
const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: breakpointKeys,
  up: (key) => `@media (min-width: ${breakPoints[key]}px)`,
  down: (key) => `@media (max-width: ${breakPoints[key]}px)`,
};

export const theme = {
  palette: {
    primary: {
      main: '#003247',
    },
    secondary: {
      main: '#638468',
    },
    tertriary: {
      main: '#7A1F0C',
    },
    cardColor: {
      main: '#F1FFFF',
      light: '#ffffff',
      dark: '#d9e6e6',
      lightShade: '#ffffff',
      darkShade: '#cdd9d9',
      lightBorder: '#ffffff',
    },
  },
  shadow: (color, distance, inset) => `${inset ? 'inset' : ''} ${distance}px ${distance}px ${distance * 2}px ${theme.palette[color].darkShade},
  ${inset ? 'inset' : ''} ${-distance}px ${-distance}px ${distance * 2}px ${theme.palette[color].lightShade}`,
  singleShadow: (color, distance, inset) => `${inset ? 'inset' : ''} ${distance}px ${distance}px ${distance * 2}px ${theme.palette[color].darkShade}`,
  background: (color, shape) => {
    switch (shape) {
      case 'concave':
        return `linear-gradient(145deg, ${theme.palette[color].light}, ${theme.palette[color].dark})`;
      case 'convex':
        return `linear-gradient(225deg, ${theme.palette[color].light}, ${theme.palette[color].dark})`;
      default:
        return theme.palette[color].main;
    }
  },
  spacing: (v) => v * 10,
  breakpoints: defaultBreakpoints,
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

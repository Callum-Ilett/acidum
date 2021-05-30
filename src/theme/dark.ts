const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 280,
  xl: 1920,
};

const darkTheme = {
  primary: "#d10459",
  secondary: "#6dfdff",

  mediaQuery: (key: keyof typeof breakpoints) => {
    return (style: TemplateStringsArray | String) =>
      `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
  },
};

export type Theme = typeof darkTheme;

export default darkTheme;

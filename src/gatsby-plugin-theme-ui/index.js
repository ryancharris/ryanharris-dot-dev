export default {
  initialColorMode: `default`,
  breakpoints: ["720px"],
  body: "system-ui, sans-serif",
  fonts: {
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    background: "#eff1f3",
    primary: "#33e",
    sidebar: "#009fb7",
    text: "#272727",
    white: "#eff1f3",
    modes: {
      dark: {},
    },
  },
  styles: {
    h1: {
      marginBottom: "32px",
      marginTop: "12px",
    },
    h2: {
      marginBottom: "12px",
      marginTop: 0,
    },
    h3: {
      marginBottom: "24px",
      marginTop: 0,
    },
    h4: {
      marginBottom: "12px",
      marginTop: 0,
      textTransform: "inherit",
    },
    h5: {
      marginBottom: "12px",
      marginTop: 0,
    },
    h6: {
      marginBottom: "12px",
      marginTop: 0,
    },
    p: {
      lineHeight: 2,
      marginBottom: "16px",
    },
    ul: {
      marginLeft: "32px",
    },
    li: {
      marginBottom: "24px",
    },
  },
}

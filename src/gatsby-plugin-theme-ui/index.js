export default {
  initialColorMode: `default`,
  breakpoints: ["768px"],
  body: "system-ui, sans-serif",
  fonts: {
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 18],
  fontWeights: {
    bold: 700,
  },
  lineHeights: {
    heading: 1.5,
  },
  colors: {
    accent: "#ff5a5f",
    background: "#ffffff",
    sidebar: "#009fb7",
    text: "#272727",
    white: "#eff1f3",
    codeBlack: "#2a2734",
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
    ol: {
      marginLeft: "32px",
    },
    li: {
      marginBottom: "24px",
    },
    pre: {
      overflow: "auto",
    },
    a: {
      boxShadow: "none",
    },
  },
}

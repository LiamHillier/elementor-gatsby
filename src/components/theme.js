import { createMuiTheme } from "@material-ui/core/styles"

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff1744',
      light: "#ff8098"
    },
    secondary: {
      main: "#1c1c1c",
      contrastText: "#ffcc00",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: "Ubuntu, sans-serif",
    h1: {
      fontSize: 32,
      fontWeight: 600
    },
    h2: {
      fontSize: 26,
    },
    h3: {
      fontSize: 24,
    },
    h4: {
      fontSize: 22,
    },
    h5: {
      fontSize: 20,
      fontWeight: 600
    },
    h6: {
      fontSize: 17,
    },
    p: {
      fontSize: ".875rem",
      fontWeight: 400
    },
    body1: {
      fontSize: "0.95rem",
      fontWeight: 400
    },
    body2: {
      fontSize: ".8rem",
      fontWeight: 400
    },
    button: {
      fontSize: "12px",
      fontWeight: 600
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': "Poppins",
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: "auto",
      },
    },
    MuiContainer: {
      root: {
        margin: "0px",
        padding: "0px",
       
      },
      maxWidthLg: {
        maxWidth: "1368px !important"
      }
    },
    MuiTab: {
      root: {
        maxWidth: "90%",
        fontWeight: 400,
       
      },
      wrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        fontSize: ".95rem",
      },
    },
    MuiFab : {
      root: {
        background: '#ff1744',
      },
      primary: {
        background: '#ff1744',
        fontSize: "14px",
      }
    },
    MuiPaper: {
      elevation1: {
        boxShadow: "0 8px 20px rgba(200,200,200,0.5);"
      }
    }
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
})

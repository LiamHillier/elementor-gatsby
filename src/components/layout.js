import React from "react"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { theme } from "./theme"

const Layout = props => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main style={{ minHeight: "90vh" }}>{props.children}</main>
      </ThemeProvider>
    </>
  )
}

export default Layout

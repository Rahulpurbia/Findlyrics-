import Nav from "./components/Nav";
import * as React from "react";
import { Lyrics } from "./components/Lyrics";
import Search from "./components/Search";
import Results from "./components/Results";
import { Context } from "./context";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Context>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Search />} />
            <Route exact path="/lyrics" element={<Lyrics />} />
          </Routes>
          {/* <Lyrics /> */}
        </Context>
      </Router>
    </ThemeProvider>
  );
}

export default App;

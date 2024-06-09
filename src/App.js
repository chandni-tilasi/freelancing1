import { CssBaseline, Stack } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//

import Axios from "./Axios";

// pages
import Home from "./pages/Home";

let theme = createTheme({
  palette: {
    background: {
      default: "black",
    },
    themeColor: "#d6ff41",
    bgColor: "#1c2427",
    inputBorderColor: "#3E5056",
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: "white",
        },
      },
    },
  },

  typography: {
    htmlFontSize: 10,
    fontFamily: ["Nunito", "sans-serif"].join(","),
    h1: {
      fontSize: 16,
    },

    h2: {
      fontSize: 15,
    },
    h3: {
      fontSize: 14,
    },
    h4: {
      fontSize: 13,
    },
    h5: {
      fontSize: 12,
    },
    h6: {
      fontSize: 11,
    },
    body1: {
      fontSize: 10,
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

theme = responsiveFontSizes(theme);

const App = () => {
  

  // Axios
  Axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.data.error) {
        console.log(error.response.data.error);
      }
      return Promise.reject(error);
    }
  );

  return (
    <Stack
      justifyContent={"space-between"}
      flexGrow={1}
      sx={{ height: "100%" }}
    >
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Home />} exact />
          </Routes>
          <ToastContainer />
        </ThemeProvider>
      </BrowserRouter>
    </Stack>
  );
};

export default App;
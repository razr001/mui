import { RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { router } from "./routers";

const appTheme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    // primary: {
    //   main: "#ff0000",
    // }
  },
});

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

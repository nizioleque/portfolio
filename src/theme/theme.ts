import { Theme } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeBase } from "./themeBase";

export const theme = createTheme(themeBase as unknown as Theme, {
  typography: {},
});

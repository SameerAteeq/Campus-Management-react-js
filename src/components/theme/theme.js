import { createTheme, colors } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: "#00bfa5",
            dark: colors.teal[400],
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        divider: {
            main: "#00bfa5",
        }
    },
});
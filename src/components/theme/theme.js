import { createTheme, responsiveFontSizes } from '@mui/material';

export let theme = createTheme({
    palette: {
        primary: {
            main: "#00bfa5",
        },
        secondary: { main: '#f44336' },
    },
    Divider: {
        main: "#00bfa5",
    }
});
theme = responsiveFontSizes(theme)